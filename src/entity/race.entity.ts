import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Race {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    speed: number;

    @Column('simple-json', {
        transformer: {
            to: (values: string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map((value) => {
                    if (typeof value['ability_score'] === 'string') {
                        return value;
                    }

                    value['ability_score'] = value['ability_score']['index'];
                    return value;
                });
            },
            from: (values: object) => {
                return values;
            }
        }
    })
    ability_bonuses: string;

    @Column()
    size: string;

    @Column()
    size_description: string;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values
                    .map((value) => {
                        if (typeof value === 'string') {
                            return value;
                        }

                        return value['index'];
                    })
                    .join('$');
            },
            from: (values: string) => {
                if (!values) {
                    return null;
                }
                return values.split('$');
            }
        },
        nullable: true
    })
    starting_proficiencies: string;

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
                    (option) => {
                        if (typeof option === 'string') {
                            return option;
                        }

                        if (option && option['index']) {
                            return option['index'];
                        }
                    }
                );

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    starting_proficiency_options: string;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values
                    .map((value) => {
                        if (typeof value === 'string') {
                            return value;
                        }

                        return value['index'];
                    })
                    .join('$');
            },
            from: (values: string) => {
                return values.split('$');
            }
        }
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
                    (option) => {
                        if (typeof option === 'string') {
                            return option;
                        }

                        if (option && option['index']) {
                            return option['index'];
                        }
                    }
                );

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    language_options: string;

    @Column()
    language_desc: string;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values
                    .map((value) => {
                        if (typeof value === 'string') {
                            return value;
                        }

                        return value['index'];
                    })
                    .join('$');
            },
            from: (values: string) => {
                if (!values) {
                    return null;
                }
                return values.split('$');
            }
        },
        nullable: true
    })
    traits: string;
}
