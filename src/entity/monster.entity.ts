import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { ArmorClassType } from './types/armor-class.type';
import { SpeedType } from './types/speed.type';
import { ProficiencyValueType } from './types/proficiency-value.type';
import { Condition } from './condition.entity';
import { SpecialAbility } from './types/special-ability.type';
import { ActionType } from './types/action.type';

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
    armor_class: ArmorClassType[];

    hit_points: number;

    hit_dice: string;

    hit_points_roll: string;

    @Column('simple-json')
    speed: SpeedType;

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
    proficiencies: ProficiencyValueType[];

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
    special_abilities: SpecialAbility[];

    @Column('simple-json')
    actions: ActionType[];
}
