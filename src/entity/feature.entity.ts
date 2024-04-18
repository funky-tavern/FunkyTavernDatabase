import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Class } from './class.entity';
import { SubClass } from './subclass.entity';
import { TPrerequisites } from './types/prerequisites.type';

@Entity()
export class Feature {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @ManyToOne(() => Class)
    class: Class;

    @ManyToOne(() => SubClass)
    subclass: SubClass;

    @Column()
    level: number;

    @Column('simple-json')
    prerequisites: TPrerequisites[];

    @Column()
    desc: string;
}
