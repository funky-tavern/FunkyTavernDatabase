import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { RuleSection } from './rule-section.entity';

@Entity()
export class Rules {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;

    @ManyToMany(() => RuleSection)
    @JoinTable()
    subsections: RuleSection[];
}
