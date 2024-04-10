import EntityMapper from './interface/entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';
import { Level } from '../../entity/level.entity';
import { DataSource, Repository } from 'typeorm';
import { Feature } from '../../entity/feature.entity';

export default class LevelMapper extends EntityMapper<Level> {
    protected featureRepository: Repository<Feature>;

    constructor(entity: new () => Level, dataSource: DataSource) {
        super(entity, dataSource);

        this.featureRepository = dataSource.getRepository(Feature);
    }

    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            class: obj.class.index,
            subclass: obj.subclass?.index,
            level: obj.level,
            features: await this.parseFeatures(
                obj.features.map((feature: any) => feature.index),
            ),
        });
    }

    private async parseFeatures(features: string[]) {
        return await this.featureRepository.findByIds(features);
    }
}
