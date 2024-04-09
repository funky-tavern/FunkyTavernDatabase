import EntityMapper from './interface/entity-mapper.interface';
import { Rules } from '../../entity/rules.entity';
import { Class } from '../../entity/class.entity';
import { StartingEquipmentOptions } from '../../entity/types/options/starting-equipment-options';

export default class ClassMapper extends EntityMapper<Class> {
    map(obj: any): Class {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            hit_die: obj.hit_die,
            proficiency_choices: obj.proficiency_choices?.map((p: any) => {
                return {
                    desc: p.desc,
                    choose: p.choose,
                    type: p.type,
                    from: p.from.options?.map(
                        (o: { item: { index: any } }) => o.item?.index,
                    ),
                };
            }),
            proficiencies: obj.proficiencies?.map(
                (p: { index: any }) => p.index,
            ),
            saving_throws: obj.saving_throws?.map(
                (s: { index: any }) => s.index,
            ),
            starting_equipment: obj.starting_equipment?.map((e: any) => {
                return {
                    equipment: e.equipment.index,
                    quantity: e.quantity,
                };
            }),
            starting_equipment_options: this.parseStartingEquipment(obj),
            multi_classing: obj.multi_classing?.prerequisites?.map((m: any) => {
                return {
                    ability_score: m.ability_score.index,
                    minimum_score: m.minimum_score,
                };
            }),
        });
    }

    private parseStartingEquipment(obj: any): StartingEquipmentOptions[] {
        return obj.starting_equipment_options?.map((o: any) => {
            return {
                desc: o.desc,
                choose: o.choose,
                type: o.type,
                from: o.from.options?.map((f: any) => {
                    switch (f.option_type) {
                        case 'counted_reference':
                            return {
                                count: f.count,
                                of: f.of.index,
                            };
                        case 'choice':
                            return {
                                desc: f.choice.desc,
                                choose: f.choice.choose,
                                type: f.choice.type,
                                from: {
                                    equipment_category:
                                        f.choice.from.equipment_category?.index,
                                },
                            };
                    }
                }),
            };
        });
    }
}
