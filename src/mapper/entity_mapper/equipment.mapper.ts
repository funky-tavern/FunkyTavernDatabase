import EntityMapper from './interface/entity-mapper.interface';
import { Equipment } from '../../entity/equipment.entity';

export default class EquipmentMapper extends EntityMapper<Equipment> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
            equipment_category: obj.equipment_category?.index,
            gear_category: obj.gear_category?.index,
            weapon_category: obj.weapon_category?.index,
            weapon_range: obj.weapon_range,
            category_range: obj.category_range,
            cost: obj.cost,
            damage_dice: obj.damage?.damage_dice,
            damage_type: obj.damage?.damage_type?.index,
            range: obj.range,
            weight: obj.weight,
            properties: obj.properties?.map(property => property.index),
            throw_range: obj.throw_range,
            two_handed_damage_dice: obj.two_handed_damage?.damage_dice,
            two_handed_damage_type: obj.two_handed_damage?.damage_type?.index,
        });
    }
}
