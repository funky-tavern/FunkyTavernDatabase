import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class WeaponProperty {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;
}
