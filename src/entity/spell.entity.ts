import { Entity, PrimaryColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { DAMAGE } from './types/damage.type';
import { DC } from './types/dc.type';
import { AREA_OF_EFFECT } from './types/area-of-effect.type';
import { OneToMany } from 'typeorm/browser';
import { MagicSchool } from './magic-school.entity';
import { HEAL_AT_SLOT_LEVEL } from './types/heal-at-slot-level.type';

@Entity()
export class Spell {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;

    @Column({ nullable: true })
    higher_level: string;

    @Column()
    range: string;

    @Column()
    components: string;

    @Column({ nullable: true })
    material: string;

    @Column()
    ritual: boolean;

    @Column()
    duration: string;

    @Column()
    concentration: boolean;

    @Column()
    casting_time: string;

    @Column()
    level: number;

    @Column({ nullable: true })
    attack_type: string;

    @Column('simple-json', { nullable: true })
    damage: DAMAGE;

    @Column('simple-json', { nullable: true })
    dc: DC;

    @Column('simple-json', { nullable: true })
    heal_at_slot_level: HEAL_AT_SLOT_LEVEL;

    @Column('simple-json', { nullable: true })
    area_of_effect: AREA_OF_EFFECT;

    @ManyToOne(() => MagicSchool)
    school: MagicSchool;
}
