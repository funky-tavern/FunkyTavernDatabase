import { Entity, PrimaryColumn, Column } from 'typeorm';
import { PREREQUISITES } from './types/prerequisites.type';

@Entity()
export class Feat {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column('simple-json')
    prerequisites: PREREQUISITES[];

    @Column()
    desc: string;
}
