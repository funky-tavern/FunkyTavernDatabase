import EntityMapper from './entity-mapper.interface';
import { DamageType } from '../../entity/damage-type.entity';


export default class DamageTypeMapper extends EntityMapper<DamageType> {
    map(obj: any): DamageType {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
        });
    }
}