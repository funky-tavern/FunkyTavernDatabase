import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Condition {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;
}
