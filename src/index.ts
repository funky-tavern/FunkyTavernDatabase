import { DATABASE_FILE_PATH } from './data-source';
import * as fs from 'fs/promises';

const _getDatabaseData = async () => {
    const data = await fs.readFile(DATABASE_FILE_PATH, { encoding: 'utf8' });

    return new Uint8Array(Buffer.from(data));
};

export const getDatabaseData = _getDatabaseData;
