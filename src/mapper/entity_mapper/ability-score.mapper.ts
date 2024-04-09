import { AbilityScore } from '../../entity/ability-score.entity';
import EntityMapper from './interface/entity-mapper.interface';

export default class AbilityScoreMapper extends EntityMapper<AbilityScore> {
    map(obj: any): AbilityScore {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            full_name: obj.full_name,
            desc: obj.desc.join('\n'),
        });
    }
}
