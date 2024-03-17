import { Repository } from 'typeorm';
import { ObjectLiteral } from 'typeorm/browser';

export default abstract class EntityMapper<Entity extends ObjectLiteral> {
    protected entityRepository: Repository<Entity>;

    constructor(entityRepository: Repository<Entity>) {
        this.entityRepository = entityRepository;
    }

    abstract map(data: any): Entity;
}