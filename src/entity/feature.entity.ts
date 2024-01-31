import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Feature {
    @PrimaryColumn()
    index: string;

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
    class: string;

    @Column()
    name: string;

    @Column()
    level: number;

    @Column('simple-json', {
        transformer: {
            to: (values: object[]) => {
                return values.map((value: any) => {
                    if (!value || !value.ability_score) {
                        return null;
                    }

                    if (typeof value.ability_score !== 'string') {
                        value.ability_score = value.ability_score.index;
                    }

                    return value;
                });
            },
            from: (values: object[]) => {
                return values;
            },
        },
    })
    prerequisites: string;

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
}
