import { Entity, PrimaryColumn, Column, ManyToMany, JoinColumn, OneToOne, ManyToOne, JoinTable } from 'typeorm';
import { Class } from './class.entity';
import { SubClass } from './subclass.entity';
import { Feature } from './feature.entity';

@Entity()
export class Level {
    @PrimaryColumn()
    index: string;

    @ManyToOne(() => Class)
    class: Class;

    @ManyToOne(() => SubClass, { nullable: true })
    subclass: SubClass;

    @Column()
    level: number;

    @ManyToMany(() => Feature)
    @JoinTable()
    features: Feature[];

    @Column({ nullable: true })
    ability_score_bonuses: number;

    @Column({ nullable: true })
    prof_bonus: number;

    @Column('simple-json', { nullable: true })
    class_specific: string;
}
