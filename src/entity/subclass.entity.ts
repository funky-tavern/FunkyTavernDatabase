import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Class } from './class.entity';
import { TSpellPrerequisite } from './types/spell-prerequisite.type';

@Entity()
export class SubClass {
    @PrimaryColumn()
    index: string;

    @ManyToOne(() => Class)
    class: Class;

    @Column()
    name: string;

    @Column()
    subclass_flavor: string;

    @Column()
    desc: string;

    @Column('simple-json', { nullable: true })
    spells: TSpellPrerequisite[];
}
