import { DataSource } from 'typeorm';
import { getDatabaseData } from '../src';
import { ENTITIES } from '../src/mapper/mapping';
import { SqljsConnectionOptions } from 'typeorm/driver/sqljs/SqljsConnectionOptions';


describe('Testing Database', () => {
    test('Database Not Empty', async () => {
        const data = await getDatabaseData();

        const dataSourceOptions: SqljsConnectionOptions = {
            type: 'sqljs',
            database: data,
            synchronize: true,
            entities: ENTITIES,
        };

        const dataSource = new DataSource(dataSourceOptions);
        await dataSource.initialize();

        for (const entity of ENTITIES) {
            const result = await dataSource.getRepository(entity).find();

            expect(result.length).not.toBe(0);
        }
    });
});
