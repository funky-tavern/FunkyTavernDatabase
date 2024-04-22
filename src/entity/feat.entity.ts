import { Column, Entity, PrimaryColumn } from 'typeorm';
import { TPrerequisites } from './types/prerequisites.type';

@Entity()
export class Feat {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column('simple-json')
    prerequisites: TPrerequisites[];

    @Column()
    desc: string;
}
