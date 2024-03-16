import { AbilityScore } from '../../entity/ability-score.entity';
import EntityMapper from './entity-mapper.interface';


export default class AbilityScoreMapper extends EntityMapper<AbilityScore> {
    map(abilityScore: any): AbilityScore {
        return this.entityRepository.create({
            index: abilityScore.index,
            name: abilityScore.name,
            full_name: abilityScore.full_name,
            desc: abilityScore.desc.join(' '),
        });
    }
}