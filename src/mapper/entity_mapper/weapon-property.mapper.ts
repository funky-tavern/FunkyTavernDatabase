import EntityMapper from './interface/entity-mapper.interface';
import { WeaponProperty } from '../../entity/weapon-property.entity';

export default class WeaponPropertyMapper extends EntityMapper<WeaponProperty> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
        });
    }
}
