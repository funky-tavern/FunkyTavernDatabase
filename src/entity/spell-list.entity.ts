import { Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { Spell } from './spell.entity';

@Entity()
export class SpellList {
    @PrimaryColumn()
    index: string;

    @ManyToMany(() => Spell)
    @JoinTable()
    spells: Spell[];
}
