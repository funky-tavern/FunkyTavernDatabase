import EntityMapper from './entity-mapper.interface';
import { WeaponProperty } from '../../entity/weapon-property.entity';

export default class WeaponPropertyMapper extends EntityMapper<WeaponProperty> {
    map(obj: any): WeaponProperty {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
        });
    }
}
