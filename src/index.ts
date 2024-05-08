import { DATABASE_FILE_PATH } from './data-source';
import * as fs from 'fs/promises';

export const getDatabaseData = async () => {
    const data = await fs.readFile(DATABASE_FILE_PATH);

    return new Uint8Array(Buffer.from(data));
};

export const getDatabaseRevision = () => '0001-beta';
