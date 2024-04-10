import EntityMapper from './interface/entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';
import { Level } from '../../entity/level.entity';

export default class LevelMapper extends EntityMapper<Level> {
    map(obj: any): Level {
        return this.entityRepository.create({
            index: obj.index,
            class: obj.class.index,
            subclass: obj.subclass?.index,
            level: obj.level,
            features: obj.features.map((feature: any) => feature.index),
        });
    }
}
