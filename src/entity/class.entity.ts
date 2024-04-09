import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Proficiency } from './proficiency.entity';
import { AbilityScore } from './ability-score.entity';
import { EQUIPMENT_QUANTITY_TYPE } from './types/equipment-quantity-type';
import { ProficiencyChoices } from './types/options/proficiency-choices';
import { StartingEquipmentOptions } from './types/options/starting-equipment-options';

@Entity()
export class Class {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column({
        nullable: true,
    })
    hit_die: string;

    @Column('simple-json')
    proficiency_choices: ProficiencyChoices[];

    @ManyToMany(() => Proficiency)
    @JoinTable()
    proficiencies: Proficiency[];

    @ManyToMany(() => AbilityScore)
    @JoinTable()
    saving_throws: AbilityScore[];

    @Column('simple-json', {
        nullable: true,
    })
    starting_equipment: EQUIPMENT_QUANTITY_TYPE[];

    @Column('simple-json')
    starting_equipment_options: StartingEquipmentOptions[]
}
