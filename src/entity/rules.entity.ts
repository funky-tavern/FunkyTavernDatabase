import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
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
