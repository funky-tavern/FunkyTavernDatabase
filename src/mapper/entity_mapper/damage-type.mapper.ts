import EntityMapper from './interface/entity-mapper.interface';
import { DamageType } from '../../entity/damage-type.entity';

export default class DamageTypeMapper extends EntityMapper<DamageType> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
        });
    }
}
