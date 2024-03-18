import {
    Entity,
    PrimaryColumn,
    Column, ManyToMany, JoinTable,
} from 'typeorm';
import { ArmorClass } from './types/armor-class';
import { Speed } from './types/speed';
import { ProficiencyValue } from './types/proficiency-value';
import { Condition } from './condition.entity';
import { SpecialAbility } from './types/special_ability';
import { Action } from './types/action';

@Entity()
export class Monster {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    desc: string;

    @Column()
    size: string;

    @Column()
    type: string;

    @Column({ nullable: true })
    subtype: string;

    @Column()
    alignment: string;

    @Column('simple-json')
    armor_class: ArmorClass[];

    hit_points: number;

    hit_dice: string;

    hit_points_roll: string;

    @Column('simple-json')
    speed: Speed;

    @Column()
    strength: number;

    @Column()
    dexterity: number;

    @Column()
    constitution: number;

    @Column()
    intelligence: number;

    @Column()
    wisdom: number;

    @Column()
    charisma: number;

    @Column("simple-json")
    proficiencies: ProficiencyValue[];

    @Column("simple-array", { nullable: true })
    damage_vulnerabilities: string[];

    @Column("simple-array", { nullable: true })
    damage_resistances: string;

    @Column("simple-array", { nullable: true })
    damage_immunities: string;

    @ManyToMany(() => Condition, { nullable: true })
    @JoinTable()
    condition_immunities: Condition[];

    @Column('simple-json')
    senses: string;

    @Column()
    languages: string;

    @Column()
    challenge_rating: string;

    @Column()
    proficiency_bonus: number;

    @Column()
    xp: number;

    @Column('simple-json')
    special_abilities: SpecialAbility[];

    @Column('simple-json')
    actions: Action[];
}
