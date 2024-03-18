import { AbilityScore } from '../../entity/ability-score.entity';
import EntityMapper from './entity-mapper.interface';
import { Monster } from '../../entity/monster.entity';
import { Proficiency } from '../../entity/proficiency.entity';
import { match } from 'node:assert';
import ProficiencyReferenceType from '../../entity/types/proficiency-type.type';

export default class ProficiencyMapper extends EntityMapper<Proficiency> {
    map(obj: any): Proficiency {
        let proficiencyType = obj.reference.url.split('/')[2];

        return this.entityRepository.create({
            index: obj.index,
            type: obj.type,
            name: obj.name,
            reference_type: proficiencyType,
            ...this.mapToProficiencyType(proficiencyType, obj),
        });
    }

    private mapToProficiencyType(
        proficiencyType: ProficiencyReferenceType,
        mapObject: any,
    ): object {
        let value = mapObject.reference.index;

        switch (proficiencyType) {
            case ProficiencyReferenceType.EQUIPMENT:
                return {
                    equipment: value,
                };
            case ProficiencyReferenceType.EQUIPMENT_CATEGORIES:
                return {
                    equipment_categories: value,
                };
            case ProficiencyReferenceType.ABILITY_SCORES:
                return {
                    ability_scores: value,
                };
            case ProficiencyReferenceType.SKILLS:
                return {
                    skills: value,
                };
            default:
                throw new Error('Invalid proficiency type');
        }
    }
}
