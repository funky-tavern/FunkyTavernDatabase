import { Repository } from 'typeorm';

export default abstract class EntityMapper<T> {
    protected entityRepository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.entityRepository = repository;
    }

    abstract map(data: any): T;
}