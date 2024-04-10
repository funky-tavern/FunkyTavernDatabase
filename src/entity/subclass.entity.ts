import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Class } from './class.entity';

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
}
