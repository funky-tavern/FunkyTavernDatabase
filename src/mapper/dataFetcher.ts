import fetch from 'node-fetch';

export class DataFetcher {
    public static async fromParentUrl(
        subpath: string,
        parentPath: string,
    ): Promise<object[]> {
        return await DataFetcher._extractDataFromParent(subpath, parentPath);
    }

    public static async fromUrl(urlPath: string): Promise<object[]> {
        return await DataFetcher._extractDataFromUrl(urlPath);
    }

    private static async _extractDataFromParent(
        subpath: string,
        parentPath: string,
    ): Promise<object[]> {
        const parentIndexes = await DataFetcher._getIndexes(parentPath);

        let data = [];
        for (let parentIndex of parentIndexes) {
            const res = await fetch(`${parentPath}/${parentIndex}/${subpath}`);
            if (res.ok === false) {
                throw new Error(
                    `Failed to fetch data from ${parentPath}/${parentIndex}/${subpath}`,
                );
            }

            const tmpData = await res.json();
            if (!!tmpData.index) {
                tmpData.index = parentIndex;
            }

            data = [...data, ...(await res.json())];
        }

        return data;
    }

    private static async _extractDataFromUrl(
        urlPath: string,
    ): Promise<object[]> {
        const indexes = await DataFetcher._getIndexes(urlPath);

        const data = [];
        for (let index of indexes) {
            data.push(await DataFetcher._getDataFromIndex(urlPath, index));
        }

        return data;
    }

    private static async _getIndexes(urlPath: string): Promise<string[]> {
        const response = await fetch(urlPath);

        if (response.ok === false) {
            throw new Error(`Failed to fetch data from ${urlPath}`);
        }

        const data = (await response.json())['results'];

        return data.map(row => row['index']);
    }

    private static async _getDataFromIndex(
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
