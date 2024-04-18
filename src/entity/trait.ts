import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { LanguageOption } from './types/options/language-option.type';
import { TraitSpecific } from './types/trait-specific';
import { Proficiency } from './proficiency.entity';
import { Spell } from './spell.entity';
import { ProficiencyChoices } from './types/options/proficiency-choices.type';

@Entity()
export class Trait {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    desc: string;

    @ManyToMany(() => Proficiency)
    @JoinTable()
    proficiencies: Proficiency[];

    @Column('simple-json', { nullable: true })
    proficiency_choices: ProficiencyChoices;

    @Column('simple-json', { nullable: true })
    trait_specific: TraitSpecific;

    @Column('simple-json', { nullable: true })
    language_options: LanguageOption;
}
