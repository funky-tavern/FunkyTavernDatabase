import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ENTITIES } from './mapper/mapping';
import * as path from 'path';

export const DATABASE_FILE_PATH = path.join(
    __dirname,
    'db',
    'funky-tavern.database'
);

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: DATABASE_FILE_PATH,
    synchronize: true,
    logging: false,
    entities: ENTITIES,
    migrations: [],
    subscribers: []
});
