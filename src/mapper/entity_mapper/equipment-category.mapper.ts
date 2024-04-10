import EntityMapper from './interface/entity-mapper.interface';
import { EquipmentCategory } from '../../entity/equipment-categories.entity';

export default class EquipmentCategoryMapper extends EntityMapper<EquipmentCategory> {
    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
        });
    }
}
