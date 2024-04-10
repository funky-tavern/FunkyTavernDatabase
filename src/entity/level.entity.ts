import { Entity, PrimaryColumn, Column, ManyToMany, JoinColumn, OneToOne } from 'typeorm';
import { Class } from './class.entity';
import { SubClass } from './subclass.entity';
import { Feature } from './feature.entity';

@Entity()
export class Level {
    @PrimaryColumn()
    index: string;

    @OneToOne(() => Class)
    @JoinColumn()
    class: Class;

    @OneToOne(() => SubClass, { nullable: true })
    @JoinColumn()
    subclass: SubClass;

    @Column()
    level: number;

    @ManyToMany(() => Feature)
    features: Feature[];

    @Column({ nullable: true })
    ability_score_bonuses: number;

    @Column({ nullable: true })
    prof_bonus: number;

    @Column('simple-json', { nullable: true })
    class_specific: string;
}
