import EntityMapper from './interface/entity-mapper.interface';
import { Background } from '../../entity/background.entity';

export default class BackgroundMapper extends EntityMapper<Background> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            starting_proficiencies: obj.starting_proficiencies.map(
                (p: { index: any }) => {
                    return p.index;
                },
            ),
            language_options: {
                choose: obj.language_options.choose,
                from: {
                    resource_list: 'languages',
                },
            },
            starting_equipment: obj.starting_equipment.map(
                (e: { equipment: { index: any }; quantity: any }) => {
                    return {
                        equipment: e.equipment.index,
                        quantity: e.quantity,
                    };
                },
            ),
            starting_equipment_options: obj.starting_equipment_options.map(
                (e: {
                    type: any;
                    choose: any;
                    from: { equipment_category: { index: any } };
                }) => {
                    return {
                        type: e.type,
                        choose: e.choose,
                        from: {
                            equipment_category: e.from.equipment_category.index,
                        },
                    };
                },
            ),
            feature: {
                name: obj.feature.name,
                desc: obj.feature.desc,
            },
            personality_traits: {
                choose: obj.personality_traits.choose,
                from: obj.personality_traits.from.options.map(
                    (o: { string: any }) => {
                        return o.string;
                    },
                ),
            },
            ideals: {
                choose: obj.ideals.choose,
                from: obj.ideals.from.options.map(
                    (o: { desc: any; alignments: { index: any }[] }) => {
                        return {
                            desc: o.desc,
                            alignments: o.alignments.map(
                                (a: { index: any }) => {
                                    return a.index;
                                },
                            ),
                        };
                    },
                ),
            },
            bonds: {
                choose: obj.bonds.choose,
                from: obj.bonds.from.options.map((o: { string: any }) => {
                    return o.string;
                }),
            },
            flaws: {
                choose: obj.flaws.choose,
                from: obj.flaws.from.options.map((o: { string: any }) => {
                    return o.string;
                }),
            },
        });
    }
}
