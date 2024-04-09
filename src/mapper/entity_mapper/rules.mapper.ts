import EntityMapper from './interface/entity-mapper.interface';
import { Rules } from '../../entity/rules.entity';

export default class RulesMapper extends EntityMapper<Rules> {
    map(obj: any): Rules {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc,
            subsections: obj.subsections.map(section => section.index),
        });
    }
}
