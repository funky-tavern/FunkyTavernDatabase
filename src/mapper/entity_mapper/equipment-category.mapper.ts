import EntityMapper from './entity-mapper.interface';
import { EquipmentCategory } from '../../entity/equipment-categories.entity';

export default class EquipmentCategoryMapper extends EntityMapper<EquipmentCategory> {
    map(obj: any): EquipmentCategory {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
        });
    }
}
