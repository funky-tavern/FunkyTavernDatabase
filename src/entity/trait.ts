import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { LanguageOption } from './types/options/language-option.type';
import { TTraitSpecific } from './types/trait-specific.type';
import { Proficiency } from './proficiency.entity';
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
    trait_specific: TTraitSpecific;

    @Column('simple-json', { nullable: true })
    language_options: LanguageOption;
}
