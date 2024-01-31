import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Skill {
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
    ability_score: string;
}
