import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { TDamage } from './types/damage.type';
import { DC } from './types/dc.type';
import { TAreaOfEffect } from './types/area-of-effect.type';
import { MagicSchool } from './magic-school.entity';
import { TSpellLevels } from './types/levels.type';

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
    damage: TDamage;

    @Column('simple-json', { nullable: true })
    dc: DC;

    @Column('simple-json', { nullable: true })
    heal_at_slot_level: TSpellLevels;

    @Column('simple-json', { nullable: true })
    area_of_effect: TAreaOfEffect;

    @ManyToOne(() => MagicSchool)
    school: MagicSchool;
}
