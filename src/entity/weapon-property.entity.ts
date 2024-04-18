import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class WeaponProperty {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;
}
