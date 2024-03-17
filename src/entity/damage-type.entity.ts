import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class DamageType {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    desc: string;
}
