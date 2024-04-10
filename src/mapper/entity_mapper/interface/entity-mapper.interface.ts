import { DataSource, Repository } from 'typeorm';
import { ObjectLiteral } from 'typeorm/browser';

export default abstract class EntityMapper<Entity extends ObjectLiteral> {
    protected entityRepository: Repository<Entity>;
    protected dataSource: DataSource;

    constructor(entity: new () => Entity, dataSource: DataSource) {
        this.dataSource = dataSource;
        this.entityRepository = dataSource.getRepository(entity);
    }

    abstract map(data: any): Entity;
}
