import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class MagicSchool {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;
}
