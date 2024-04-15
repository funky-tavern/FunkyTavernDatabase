import EntityMapper from './interface/entity-mapper.interface';
import { Skill } from '../../entity/skill.entity';
import { Feat } from '../../entity/feat.entity';
import { MagicItem } from '../../entity/magic-item.entity';

export default class MagicItemMapper extends EntityMapper<MagicItem> {
    async map(obj: any): Promise<MagicItem> {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            equipment_category: obj.equipment_category.index,
            variants: obj.variants.map((v: { index: any; }) => {
                return Object.assign( new MagicItem(), {
                    index: v.index,
                })
            }),
            variant: obj.variant,
            desc: obj.desc.join('\n'),
        });
    }
}
