import { AppDataSource } from '../data-source';
import fetch from 'node-fetch';

export class Mapper<T> {
    private readonly class: { new (): T };

    constructor(classType: { new (): T }) {
        this.class = classType;
    }

    public async mapFromParent(
        subpath: string,
        parentPath: string,
    ): Promise<T[]> {
        const data = await this.extractDataFromParent(subpath, parentPath);

        return this.parseData(data);
    }

    public async mapFromUrl(urlPath: string): Promise<T[]> {
        const data = await this.extractDataFromUrl(urlPath);

        return this.parseData(data);
    }

    private parseData(data: object[]): T[] {
        const columnNames = this.getColumnNames();

        return data.map(row => {
            const entity = new this.class();

            columnNames.forEach(columnName => {
                entity[columnName] = row[columnName];
            });

            return entity;
        });
    }

    private getColumnNames(): string[] {
        return AppDataSource.getMetadata(this.class).ownColumns.map(
            column => column.propertyName,
        );
    }

    private async extractDataFromParent(
        subpath: string,
        parentPath: string,
    ): Promise<object[]> {
        const parentIndexes = await this.getIndexes(parentPath);

        let data = [];
        for (let parentIndex of parentIndexes) {
            const res = await fetch(`${parentPath}/${parentIndex}/${subpath}`);
            if (res.ok === false) {
                throw new Error(
                    `Failed to fetch data from ${parentPath}/${parentIndex}/${subpath}`,
                );
            }

            data = [...data, ...(await res.json())];
        }

        return data;
    }

    private async extractDataFromUrl(urlPath: string): Promise<object[]> {
        const indexes = await this.getIndexes(urlPath);

        const data = [];
        for (let index of indexes) {
            data.push(await this.getDataFromIndex(urlPath, index));
        }

        return data;
    }

    private async getIndexes(urlPath: string): Promise<string[]> {
        const response = await fetch(urlPath);

        if (response.ok === false) {
            throw new Error(`Failed to fetch data from ${urlPath}`);
        }

        const data = (await response.json())['results'];

        return data.map(row => row['index']);
    }

    private async getDataFromIndex(
        urlPath: string,
        index: string,
    ): Promise<object> {
        const response = await fetch(`${urlPath}/${index}`);

        if (response.ok === false) {
            throw new Error(`Failed to fetch data from ${urlPath}/${index}`);
        }

        return response.json() as Promise<object>;
    }
}
