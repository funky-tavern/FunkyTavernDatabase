import EntityMapper from './entity-mapper.interface';
import { Condition } from '../../entity/condition.entity';

export default class ConditionMapper extends EntityMapper<Condition> {
    map(obj: any): Condition {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
        });
    }
}
