import EntityMapper from './interface/entity-mapper.interface';
import { Proficiency } from '../../entity/proficiency.entity';
import { TProficiencyType } from '../../entity/types/proficiency.type';

export default class ProficiencyMapper extends EntityMapper<Proficiency> {
    async map(obj: any) {
        const proficiencyType = obj.reference.url.split('/')[2];

        return this.entityRepository.create({
            index: obj.index,
            type: obj.type,
            name: obj.name,
            reference_type: proficiencyType,
            ...this.mapToProficiencyType(proficiencyType, obj),
        });
    }

    private mapToProficiencyType(
        proficiencyType: TProficiencyType,
        mapObject: any,
    ): object {
        const value = mapObject.reference.index;

        switch (proficiencyType) {
            case 'equipment':
                return {
                    equipment: value,
                };
            case 'equipment-categories':
                return {
                    equipment_categories: value,
                };
            case 'ability-scores':
                return {
                    ability_scores: value,
                };
            case 'skills':
                return {
                    skills: value,
                };
            default:
                throw new Error('Invalid proficiency type');
        }
    }
}
