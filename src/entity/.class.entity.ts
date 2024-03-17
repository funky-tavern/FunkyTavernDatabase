import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Class {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    hit_die: string;

    @Column({
        transformer: {
            to: (value: string[] | object[]) => {
                if (typeof value[0] === 'string') {
                    return value.join('$');
                }
                return value.map(value => value['index']).join('$');
            },
            from: (value: string) => {
                return value.split('$');
            },
        },
    })
    proficiencies: string;

    @Column('simple-json', {
        transformer: {
            to: (values: object[]) => {
                if (!values) {
                    return null;
                }

                for (let value of values) {
                    value['from']['options'] = value['from']['options'].map(
                        option => {
                            if (typeof option === 'string') {
                                return option;
                            }

                            if (option['option_type'] === 'choice') {
                                const choices = option['choice'];
                                choices['from']['options'] = choices['from'][
                                    'options'
                                ].map(choice => {
                                    if (typeof choice === 'string') {
                                        return option;
                                    }
                                    return choice['item']['index'];
                                });
                                return option;
                            }

                            return option['item']['index'];
                        },
                    );
                }

                return values;
            },
            from: (value: object) => {
                return value;
            },
        },
        nullable: true,
    })
    proficiency_choices: string;
}
