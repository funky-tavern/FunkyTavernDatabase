import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
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
