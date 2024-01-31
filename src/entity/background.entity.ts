import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Background {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values
                    .map(value => {
                        if (typeof value === 'string') {
                            return value;
                        }

                        return value['index'];
                    })
                    .join('$');
            },
            from: (values: string) => {
                if (!values) {
                    return [];
                }

                return values.split('$');
            },
        },
        nullable: true,
    })
    starting_proficiencies: string;

    @Column('simple-json', {
        transformer: {
            to: (value: object) => {
                if (!value || !value['from']) {
                    return null;
                }

                if (value['type']) {
                    delete value['type'];
                }

                if (value['from']['resource_list_url']) {
                    delete value['from']['resource_list_url'];
                }

                return value;
            },
            from: (value: object[]) => {
                return value;
            },
        },
    })
    language_options: string;

    @Column('simple-json', {
        transformer: {
            to: (values: object[]) => {
                return values.map(value => {
                    if (typeof value['equipment'] !== 'string') {
                        value['equipment'] = value['equipment']['index'];
                    }

                    return value;
                });
            },
            from: (value: object[]) => {
                return value;
            },
        },
    })
    starting_equipment: string;

    @Column('simple-json', {
        transformer: {
            to: (values: object[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map(value => {
                    if (value['type']) {
                        delete value['type'];
                    }

                    if (
                        typeof value['from']['equipment_category'] !== 'string'
                    ) {
                        value['from']['equipment_category'] =
                            value['from']['equipment_category']['index'];
                    }

                    return value;
                });
            },
            from: (value: object[]) => {
                return value;
            },
        },
        nullable: true,
    })
    starting_equipment_options: string;

    @Column('simple-json', {
        transformer: {
            to: (value: object[]) => {
                if (!value) {
                    return null;
                }

                return value;
            },
            from: (value: object[]) => {
                return value;
            },
        },
        nullable: true,
    })
    feature: string;

    @Column('simple-json', {
        transformer: {
            to: (value: object[]) => {
                if (!value || !value['from']) {
                    return null;
                }

                if (value['type']) {
                    delete value['type'];
                }

                return value;
            },
            from: (value: object[]) => {
                return value;
            },
        },
    })
    personality_traits: string;

    @Column('simple-json', {
        transformer: {
            to: (value: object[]) => {
                if (!value || !value['from']) {
                    return null;
                }

                if (value['type']) {
                    delete value['type'];
                }

                value['from']['options'].forEach(option => {
                    if (option['option_type']) {
                        delete option['option_type'];
                    }

                    option['alignments'] = option['alignments'].map(
                        alignment => {
                            if (!alignment) return null;

                            if (typeof alignment === 'string') {
                                return alignment;
                            }

                            return !alignment['index']
                                ? alignment['index']
                                : null;
                        },
                    );
                });

                return value;
            },
            from: (value: object[]) => {
                return value;
            },
        },
    })
    ideals: string;

    @Column('simple-json', {
        transformer: {
            to: (value: object[]) => {
                if (!value || !value['from']) {
                    return null;
                }

                if (value['type']) {
                    delete value['type'];
                }

                return value;
            },
            from: (value: object[]) => {
                return value;
            },
        },
    })
    bonds: string;

    @Column('simple-json', {
        transformer: {
            to: (value: object[]) => {
                if (!value || !value['from']) {
                    return null;
                }

                if (value['type']) {
                    delete value['type'];
                }

                return value;
            },
            from: (value: object[]) => {
                return value;
            },
        },
    })
    flaws: string;
}
