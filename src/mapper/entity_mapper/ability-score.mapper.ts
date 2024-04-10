import { AbilityScore } from '../../entity/ability-score.entity';
import EntityMapper from './interface/entity-mapper.interface';

export default class AbilityScoreMapper extends EntityMapper<AbilityScore> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            full_name: obj.full_name,
            desc: obj.desc.join('\n'),
        });
    }
}
