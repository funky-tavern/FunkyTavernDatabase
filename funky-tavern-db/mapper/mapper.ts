import {join} from "path";
import {existsSync} from "fs";
import {readFile} from "fs/promises";
import {AppDataSource} from "../data-source";
import { EntityTarget } from "typeorm/common/EntityTarget";


export class Mapper<T> {

    private readonly class: { new (): T };

    constructor(classType: { new (): T }) {
        this.class = classType;
    }

    public async map(filePath: string): Promise<T[]> {
        filePath = join(filePath);

        if (!existsSync(filePath)) {
            throw new Error(`File ${filePath} does not exist`);
        }

        const data = await this.extractDataFromFile(filePath);

        return this.parseData(data);
    }

    private parseData(data: object[]): T[] {
        const columnNames = this.getColumnNames();

        return data.map((row) => {
            const entity = new this.class();

            columnNames.forEach((columnName) => {
                entity[columnName] = row[columnName];
            });

            return entity;
        });
    }

    private getColumnNames(): string[] {
        return AppDataSource.getMetadata(this.class)
            .ownColumns.map(column => column.propertyName);
    }

    private async extractDataFromFile(filePath: string): Promise<object[]> {
        const file = await readFile(filePath, "utf8");
        return JSON.parse(file);
    }
}