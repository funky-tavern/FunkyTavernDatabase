import EntityMapper from './interface/entity-mapper.interface';
import { Race } from '../../entity/.race.entity';

export default class RaceMapper extends EntityMapper<Race> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
        });
    }
}
