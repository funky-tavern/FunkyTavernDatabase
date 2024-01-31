import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Level {
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

    @Column({
        nullable: true,
        transformer: {
            to: (value: object | string) => {
                if (!value) {
                    return null;
                }
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
    subclass: string;

    @Column()
    level: number;

    @Column({ nullable: true })
    ability_score_bonuses: number;

    @Column({ nullable: true })
    prof_bonus: number;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                return values
                    .map(value => {
                        if (typeof value === 'string') {
                            return value;
                        }
                        return value['index'];
                    })
                    .join('$');
            },
            from: (value: string) => {
                return value.split('$');
            },
        },
    })
    features: string;

    @Column('simple-json', { nullable: true })
    class_specific: string;
}
