import EntityMapper from './interface/entity-mapper.interface';
import { MagicSchool } from '../../entity/magic-school.entity';


export default class MagicSchoolMapper extends EntityMapper<MagicSchool> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc,
        });
    }
}
