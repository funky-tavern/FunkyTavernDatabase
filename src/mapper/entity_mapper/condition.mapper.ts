import EntityMapper from './interface/entity-mapper.interface';
import { Condition } from '../../entity/condition.entity';

export default class ConditionMapper extends EntityMapper<Condition> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
        });
    }
}
