import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class RuleSection {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;
}
