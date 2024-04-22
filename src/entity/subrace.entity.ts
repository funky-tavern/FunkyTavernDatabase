import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';
import { Race } from './race.entity';
import { TAbilityBonus } from './types/ability-bonus.type';
import { Proficiency } from './proficiency.entity';
import { Language } from './language.entity';
import { LanguageOption } from './types/options/language-option.type';
import { Trait } from './trait';

@Entity()
export class SubRace {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @ManyToOne(() => Race)
    race: Race;

    @Column()
    desc: string;

    @Column('simple-json')
    ability_bonuses: TAbilityBonus[];

    @ManyToMany(() => Proficiency)
    @JoinTable()
    starting_proficiencies: Proficiency[];

    @ManyToMany(() => Language)
    @JoinTable()
    languages: Language[];

    @Column('simple-json', { nullable: true })
    language_options: LanguageOption;

    @ManyToMany(() => Trait)
    @JoinTable()
    racial_traits: Trait[];
}
