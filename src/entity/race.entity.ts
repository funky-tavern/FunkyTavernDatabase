import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { TAbilityBonus } from './types/ability-bonus.type';
import { TSize } from './types/size.type';
import { Language } from './language.entity';
import { Trait } from './trait';
import { LanguageOption } from './types/options/language-option.type';
import { Proficiency } from './proficiency.entity';
import { ProficiencyChoices } from './types/options/proficiency-choices.type';

@Entity()
export class Race {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    speed: number;

    @Column('simple-json')
    ability_bonuses: TAbilityBonus[];

    @Column()
    size: TSize;

    @Column()
    size_description: string;

    @ManyToMany(() => Proficiency)
    @JoinTable()
    starting_proficiencies: Proficiency[];

    @Column('simple-json', { nullable: true })
    starting_proficiency_options: ProficiencyChoices;

    @ManyToMany(() => Language)
    @JoinTable()
    languages: Language[];

    @Column('simple-json', { nullable: true })
    language_options: LanguageOption;

    @Column()
    language_desc: string;

    @ManyToMany(() => Trait)
    @JoinTable()
    traits: Trait[];
}
