import EntityMapper from './interface/entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';
import { Feat } from '../../entity/feat.entity';

export default class FeatMapper extends EntityMapper<Feat> {
    async map(obj: any): Promise<Feat> {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            prerequisites: obj.prerequisites.map((p) => {
                return {
                    type: 'ability_score',
                    ability_score: p.ability_score.index,
                    minimum: p.minimum_score,
                }
            }),
            desc: obj.desc.join('\n'),
        });
    }
}
