import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Language {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    desc: string;

    @Column()
    type: string;
}
