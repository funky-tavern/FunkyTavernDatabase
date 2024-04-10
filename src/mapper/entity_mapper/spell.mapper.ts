import EntityMapper from './interface/entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';
import { Spell } from '../../entity/spell.entity';

export default class SpellMapper extends EntityMapper<Spell> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
            higher_level: obj.higher_level.join('\n'),
            range: obj.range,
            components: obj.components.join(''),
            material: obj.material,
            ritual: obj.ritual,
            duration: obj.duration,
            concentration: obj.concentration,
            casting_time: obj.casting_time,
            level: obj.level,
            attack_type: obj.attack_type,
            damage: !!obj.damage ? {
                damage_type: obj.damage.damage_type?.index,
                damage_at_slot_level: obj.damage.damage_at_slot_level,
            } : null,
            dc: !!obj.dc ? {
                dc_type: obj.dc.dc_type.index,
                success_type: obj.dc.dc_success,
            } : null,
            heal_at_slot_level: obj.heal_at_slot_level,
            area_of_effect: !!obj.area_of_effect ? {
                type: obj.area_of_effect.type,
                size: obj.area_of_effect.size,
            } : null,
            school: obj.school.index,
        });
    }
}
