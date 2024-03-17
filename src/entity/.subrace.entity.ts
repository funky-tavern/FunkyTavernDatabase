import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class SubRace {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column({
        transformer: {
            to: (value: object | string) => {
                if (typeof value === 'string') {
                    return value;
                }
                return value['index'];
            },
            from: (value: string) => {
                return value;
            },
        },
    })
    race: string;

    @Column()
    desc: string;

    @Column('simple-json', {
        transformer: {
            to: (values: object[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map(value => {
                    if (typeof value['ability_score'] !== 'string') {
                        value['ability_score'] =
                            value['ability_score']['index'];
                    }

                    return value;
                });
            },
            from: (value: object) => {
                return value;
            },
        },
    })
    ability_bonuses: string;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values
                    .map(value => {
                        if (typeof value !== 'string') {
                            value = value['index'];
                        }

                        return value;
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
    starting_proficiencies: string;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values
                    .map(value => {
                        if (typeof value !== 'string') {
                            value = value['index'];
                        }

                        return value;
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
    languages: string;

    @Column('simple-json', {
        transformer: {
            to: (value: object) => {
                if (
                    !value ||
                    !value['from']['options'] ||
                    value['from']['options'].length === 0
                ) {
                    return null;
                }

                if (value['type']) {
                    delete value['type'];
                }

                value['from']['options'] = value['from']['options'].map(
                    option => {
                        if (typeof option === 'string') {
                            return option;
                        }

                        if (option && option['index']) {
                            return option['index'];
                        }
                    },
                );

                return value;
            },
            from: (value: object) => {
                return value;
            },
        },
        nullable: true,
    })
    language_options: string;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values
                    .map(value => {
                        if (typeof value !== 'string') {
                            value = value['index'];
                        }

                        return value;
                    })
                    .join('$');
            },
            from: (value: string) => {
                return value.split('$');
            },
        },
    })
    racial_traits: string;
}
