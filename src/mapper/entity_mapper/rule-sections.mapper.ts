import EntityMapper from './interface/entity-mapper.interface';
import { RuleSection } from '../../entity/rule-section.entity';

export default class RuleSectionMapper extends EntityMapper<RuleSection> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc,
        });
    }
}
