import { Entity, PrimaryColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { EquipmentCategory } from './equipment-categories.entity';
import { DamageType } from './damage-type.entity';
import { WeaponProperty } from './weapon-property.entity';


@Entity()
export class Equipment {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;

    @ManyToOne(() => EquipmentCategory)
    equipment_category: EquipmentCategory;

    @ManyToOne(() => EquipmentCategory, { nullable: true })
    gear_category: EquipmentCategory;

    @ManyToOne(() => EquipmentCategory, { nullable: true })
    weapon_category: EquipmentCategory;

    @Column({ nullable: true })
    weapon_range: string;

    @Column({ nullable: true })
    category_range: string;

    @Column('simple-json')
    cost: object;

    @Column({ nullable: true })
    damage_dice: string;

    @ManyToOne(() => DamageType, { nullable: true })
    damage_type: DamageType;

    @Column('simple-json', { nullable: true })
    range: object;

    @Column({ nullable: true })
    weight: number;

    @ManyToMany(() => WeaponProperty, { nullable: true })
    @JoinTable()
    properties: WeaponProperty[];

    @Column('simple-json', { nullable: true })
    throw_range: object;

    @Column({ nullable: true })
    two_handed_damage_dice: string;

    @ManyToOne(() => DamageType, { nullable: true })
    two_handed_damage_type: DamageType;
}
