import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class AbilityScore {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    full_name: string;

    @Column()
    desc: string;
}
