import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import { EquipmentCategory } from './equipment-categories.entity';
import { ITEM_RARITY } from './types/item-rarity.type';

@Entity()
export class MagicItem {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @ManyToOne(() => EquipmentCategory)
    equipment_category: EquipmentCategory;

    @Column({ nullable: true })
    rarity: ITEM_RARITY;

    @ManyToMany(() => MagicItem)
    @JoinTable()
    variants: string[];

    @Column()
    variant: boolean;

    @Column()
    desc: string;
}
