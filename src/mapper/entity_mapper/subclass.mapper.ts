import EntityMapper from './interface/entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';
import { SubClass } from '../../entity/subclass.entity';

export default class SubClassMapper extends EntityMapper<SubClass> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            class: obj.class.index,
            name: obj.name,
            subclass_flavor: obj.subclass_flavor,
            desc: obj.desc.join('\n'),
        });
    }
}
