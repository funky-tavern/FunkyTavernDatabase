import EntityMapper from './interface/entity-mapper.interface';
import { Monster } from '../../entity/monster.entity';
import { SpecialAbility } from '../../entity/types/special-ability.type';
import { ActionType } from '../../entity/types/action.type';
import { DataSource, Repository } from 'typeorm';
import { Condition } from '../../entity/condition.entity';

export default class MonsterMapper extends EntityMapper<Monster> {
    protected conditionRepository: Repository<Condition>;

    constructor(entity: new () => Monster, dataSource: DataSource) {
        super(entity, dataSource);

        this.conditionRepository = dataSource.getRepository(Condition);
    }

    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc,
            type: obj.type,
            size: obj.size,
            subtype: obj.subtype,
            alignment: obj.alignment,
            armor_class: obj.armor_class,
            hit_points: obj.hit_points,
            hit_dice: obj.hit_dice,
            hit_points_roll: obj.hit_points_roll,
            speed: obj.speed,
            strength: obj.strength,
            dexterity: obj.dexterity,
            constitution: obj.constitution,
            intelligence: obj.intelligence,
            wisdom: obj.wisdom,
            charisma: obj.charisma,
            proficiencies: obj.proficiencies.map((p: any) => {
                return {
                    proficiency: p.proficiency?.index,
                    value: p.value,
                };
            }),
            damage_vulnerabilities: obj.damage_vulnerabilities,
            condition_immunities: !!obj.condition_immunities
                ? await this.parseConditions(
                      obj.condition_immunities.map(c => c.index),
                  )
                : [],
            senses: obj.senses,
            languages: obj.languages,
            challenge_rating: obj.challenge_rating,
            proficiency_bonus: obj.proficiency_bonus,
            xp: obj.xp,
            special_abilities: this.parseSpecialAbilities(obj),
            actions: this.parseActions(obj),
        });
    }

    private async parseConditions(conditions: string[]) {
        return this.conditionRepository.findByIds(conditions);
    }

    private parseSpecialAbilities(obj: any): SpecialAbility[] {
        return obj.special_abilities?.map((ability: any) => {
            let mappedAbility = {
                name: ability.name,
                desc: ability.desc,
            };

            if (!!ability?.dc) {
                mappedAbility['dc'] = {
                    dc_type: ability.dc.dc_type.index,
                    dc_success: ability.dc.dc_success,
                    success_type: ability.dc.success_type,
                };
            }

            return mappedAbility;
        });
    }

    private parseActions(obj: any): ActionType[] {
        return obj.actions?.map((action: any) => {
            let mappedAction = {
                name: action.name,
                multiattack_type: action.multiattack_type,
                desc: action.desc,
                attack_bonus: action.attack_bonus,
                actions: action.actions,
            };

            if (!!action?.dc) {
                mappedAction['dc'] = {
                    dc_type: action.dc.dc_type.index,
                    dc_success: action.dc.dc_success,
                    success_type: action.dc.success_type,
                };
            }

            if (!!action?.damage) {
                mappedAction['damage'] = action.damage.map((d: any) => {
                    return {
                        damage_type: d.damage_type?.index,
                        damage_dice: d.damage_dice,
                    };
                });
            }

            return mappedAction;
        });
    }
}
