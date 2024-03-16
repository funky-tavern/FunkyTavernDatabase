import EntityMapper from './entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';


export default class SkillMapper extends EntityMapper<Skill> {
    map(abilityScore: any): Skill {
        return this.entityRepository.create({
            index: abilityScore.index,
            name: abilityScore.name,
            desc: abilityScore.desc.join(' '),
            ability_score: abilityScore.ability_score.index,
        });
    }
}