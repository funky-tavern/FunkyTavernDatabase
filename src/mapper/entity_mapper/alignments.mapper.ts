import EntityMapper from './entity-mapper.interface';
import { Alignment } from '../../entity/alignment.entity';


export default class AlignmentMapper extends EntityMapper<Alignment> {
    map(obj: any): Alignment {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            abbreviation: obj.abbreviation,
            desc: obj.desc,
        });
    }
}