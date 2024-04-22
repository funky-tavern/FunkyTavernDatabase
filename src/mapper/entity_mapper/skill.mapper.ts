import EntityMapper from './interface/entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';

export default class SkillMapper extends EntityMapper<Skill> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc.join(' '),
            ability_score: obj.ability_score.index,
        });
    }
}
