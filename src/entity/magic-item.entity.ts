import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';
import { EquipmentCategory } from './equipment-categories.entity';
import { TItemRarity } from './types/item-rarity.type';

@Entity()
export class MagicItem {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @ManyToOne(() => EquipmentCategory)
    equipment_category: EquipmentCategory;

    @Column({ nullable: true })
    rarity: TItemRarity;

    @ManyToMany(() => MagicItem)
    @JoinTable()
    variants: string[];

    @Column()
    variant: boolean;

    @Column()
    desc: string;
}
