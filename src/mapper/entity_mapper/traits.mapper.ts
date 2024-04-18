import EntityMapper from './interface/entity-mapper.interface';
import { Trait } from '../../entity/trait';
import { DataSource, Repository } from 'typeorm';
import { Proficiency } from '../../entity/proficiency.entity';
import { TraitSpecific, TraitSpell, TraitSubOption, TraitWeapon } from '../../entity/types/trait-specific';

export default class TraitMapper extends EntityMapper<Trait> {
    private proficiencyRepository: Repository<Proficiency>;

    constructor(entity: new () => Trait, dataSource: DataSource) {
        super(entity, dataSource);

        this.proficiencyRepository = dataSource.getRepository(Proficiency);
    }

    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join('\n'),
            proficiencies: !!obj.proficiencies ?
                await this.parseProficiencies(
                    obj.proficiencies.map((p: any) => p.index),
                ) : null,
            proficiency_choices: !!obj.proficiency_choices ? {
                choose: obj.proficiency_choices.choose,
                from: obj.proficiency_choices.from.options.map((p: any) => {
                    return p.item.index;
                }),
            } : null,
            trait_specific: !!obj.trait_specific ? this.parseTraitSpecific(obj.trait_specific) : null,
            language_options: !!obj.language_options ? {
                choose: obj.language_options.choose,
                from: obj.language_options.from.options.map((o: any) => {
                    return o.item.index;
                }),

            } : null,
        });
    }

    private async parseProficiencies(proficiencies: string[]) {
        return this.proficiencyRepository.findByIds(proficiencies);
    }

    private parseTraitSpecific(ts: any): TraitSpecific {
        if (!!ts.subtrait_options) {
            return this.parseSubtraitOptions(ts);
        } else if (!!ts.spell_options) {
            return this.parseTraitSpellOptions(ts);
        } else {
            return this.parseTraitWeapon(ts);
        }
    }

    private parseSubtraitOptions(ts: any): TraitSubOption {
        return {
            type: 'subtrait',
            choose: ts.subtrait_options.choose,
            from: ts.subtrait_options.from.options.map((o: any) => {
                return o.item.index;
            }),
        };
    }

    private parseTraitSpellOptions(ts: any): TraitSpell {
        return {
            type: 'spell',
            choose: ts.spell_options.choose,
            from: ts.spell_options.from.options.map((o: any) => {
                return o.item.index;
            }),
        };
    }

    private parseTraitWeapon(ts: any): TraitWeapon {
        return {
            name: ts.breath_weapon.name,
            desc: ts.breath_weapon.desc,
            dc: {
                dc_type: ts.breath_weapon.dc.dc_type.index,
                success_type: ts.breath_weapon.dc.success_type,
            },
            area_of_effect: {
                type: ts.breath_weapon.area_of_effect.type,
                size: ts.breath_weapon.area_of_effect.size,
            },
            usage: {
                type: ts.breath_weapon.usage.type,
                times: ts.breath_weapon.usage.times,
            },
            damage: ts.breath_weapon.damage.map((d: any) => {
                return {
                    damage_type: d.damage_type.index,
                    damage_at_character_level: d.damage_at_character_level,
                };
            })
        };
    }
}
