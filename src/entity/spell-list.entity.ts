import { Entity, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Spell } from './spell.entity';

@Entity()
export class SpellList {
    @PrimaryColumn()
    index: string;

    @ManyToMany(() => Spell)
    @JoinTable()
    spells: Spell[];
}
