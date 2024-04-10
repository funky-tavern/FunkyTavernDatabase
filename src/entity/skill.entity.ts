import {
    Entity,
    PrimaryColumn,
    Column,
    JoinColumn,
    ManyToOne,
    ManyToMany,
} from 'typeorm';
import { OneToOne } from 'typeorm';
import { AbilityScore } from './ability-score.entity';

@Entity()
export class Skill {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;

    @ManyToOne(() => AbilityScore)
    ability_score: AbilityScore;
}
