import EntityMapper from './entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';
import { RuleSection } from '../../entity/rule-section.entity';
import { DataSource } from 'typeorm';
import { Rules } from '../../entity/rules.entity';

export default class RuleSectionMapper extends EntityMapper<RuleSection> {
    map(obj: any): RuleSection {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc,
        });
    }
}
