import EntityMapper from './interface/entity-mapper.interface';
import { Rules } from '../../entity/rules.entity';
import { Class } from '../../entity/class.entity';
import { StartingEquipmentOptions } from '../../entity/types/options/starting-equipment-options';
import { DataSource, Repository } from 'typeorm';
import { Proficiency } from '../../entity/proficiency.entity';
import { AbilityScore } from '../../entity/ability-score.entity';
import { Spell } from '../../entity/spell.entity';

export default class ClassMapper extends EntityMapper<Class> {
    protected proficiencyRepository: Repository<Proficiency>;
    protected abilityScoreRepository: Repository<AbilityScore>;
    protected spellRepository: Repository<Spell>;

    constructor(entity: new () => Class, dataSource: DataSource) {
        super(entity, dataSource);

        this.proficiencyRepository = dataSource.getRepository(Proficiency);
        this.abilityScoreRepository = dataSource.getRepository(AbilityScore);
        this.spellRepository = dataSource.getRepository(Spell);
    }

    async map(obj: any) {
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
            proficiencies: !!obj.proficiencies
                ? await this.parseProficiencies(
                      obj.proficiencies.map(p => p.index),
                  )
                : null,
            saving_throws: !!obj.saving_throws
                ? await this.parseAbilityScores(
                      obj.saving_throws.map(s => s.index),
                  )
                : null,
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
            spellcasting_level: obj.spellcasting?.level,
            spellcasting_ability: !!obj.spellcasting
                ? await this.abilityScoreRepository.findOne({
                      where: { index: obj.spellcasting?.spellcasting_ability.index },
                  })
                : null,
            spells: !!obj.spellcasting ?
                await this.parseSpells(obj.spells)
                : null,
        });
    }

    private async parseSpells(spells: string[]) {
        return await this.spellRepository.findByIds(spells);
    }

    private async parseProficiencies(proficiencies: string[]) {
        return await this.proficiencyRepository.findByIds(proficiencies);
    }

    private async parseAbilityScores(abilityScores: string[]) {
        return await this.abilityScoreRepository.findByIds(abilityScores);
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
