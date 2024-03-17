import { Entity, PrimaryColumn, Column, JoinTable } from 'typeorm';
import { RuleSection } from './rule-section.entity';
import { ManyToMany } from 'typeorm';

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
