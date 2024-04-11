import { Entity, PrimaryColumn, Column } from 'typeorm';
import { LanguageOption } from './types/options/language-option.interface';
import { TraitSpecific } from './types/trait-specific';

@Entity()
export class Trait {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column({
        transformer: {
            to: (value: string[]) => {
                return value.join('$');
            },
            from: (value: string) => {
                return value.split('$');
            },
        },
    })
    desc: string;

    @Column({
        transformer: {
            to: (value: object[] | string[]) => {
                if (!value || value.length === 0) {
                    return null;
                }

                return value
                    .map(value => {
                        if (typeof value === 'string') {
                            return value;
                        }

                        return value['index'];
                    })
                    .join('$');
            },
            from: (value: string) => {
                if (!value) {
                    return null;
                }
                return value.split('$');
            },
        },
        nullable: true,
    })
    proficiencies: string;

    @Column('simple-json', {
        nullable: true,
    })
    trait_specific: TraitSpecific;

    @Column('simple-json', {
        nullable: true,
    })
    language_options: LanguageOption;
}
