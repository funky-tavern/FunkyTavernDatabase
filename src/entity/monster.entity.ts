import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { TArmorClass } from './types/armor-class.type';
import { TSpeed } from './types/speed.type';
import { TProficiencyValue } from './types/t-proficiency.value';
import { Condition } from './condition.entity';
import { TSpecialAbility } from './types/special-ability.type';
import { TAction } from './types/action.type';

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
    armor_class: TArmorClass[];

    hit_points: number;

    hit_dice: string;

    hit_points_roll: string;

    @Column('simple-json')
    speed: TSpeed;

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

    @Column('simple-json')
    proficiencies: TProficiencyValue[];

    @Column('simple-array', { nullable: true })
    damage_vulnerabilities: string[];

    @Column('simple-array', { nullable: true })
    damage_resistances: string;

    @Column('simple-array', { nullable: true })
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
    special_abilities: TSpecialAbility[];

    @Column('simple-json')
    actions: TAction[];
}
