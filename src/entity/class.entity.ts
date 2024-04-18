import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';
import { Proficiency } from './proficiency.entity';
import { AbilityScore } from './ability-score.entity';
import { TEquipmentQuantity } from './types/equipment-quantity-type';
import { ProficiencyChoices } from './types/options/proficiency-choices.type';
import { StartingEquipmentOptions } from './types/options/starting-equipment-options.type';
import { TClassPrerequisites } from './types/class-prerequisites.type';
import { Spell } from './spell.entity';

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

    @ManyToMany(() => Proficiency, { nullable: true })
    @JoinTable()
    proficiencies: Proficiency[];

    @ManyToMany(() => AbilityScore, { nullable: true })
    @JoinTable()
    saving_throws: AbilityScore[];

    @Column('simple-json', {
        nullable: true,
    })
    starting_equipment: TEquipmentQuantity[];

    @Column('simple-json')
    starting_equipment_options: StartingEquipmentOptions[];

    @Column('simple-json', {
        nullable: true,
    })
    multi_classing: TClassPrerequisites[];

    @Column({ nullable: true })
    spellcasting_level: number;

    @ManyToOne(() => AbilityScore, { nullable: true })
    spellcasting_ability: AbilityScore;

    @ManyToMany(() => Spell, { nullable: true })
    @JoinTable()
    spells: Spell[];
}
