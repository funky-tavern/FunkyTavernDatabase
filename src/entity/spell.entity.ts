import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Spell {
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
            }
        }
    })
    desc: string;

    @Column({
        transformer: {
            to: (value: string[]) => {
                if (!value || value.length === 0) {
                    return null;
                }

                return value.join('$');
            },
            from: (value: string) => {
                if (!value) {
                    return null;
                }
                return value.split('$');
            }
        },
        nullable: true
    })
    higher_level: string;

    @Column()
    range: string;

    @Column({
        transformer: {
            to: (value: string[]) => {
                return value.join('$');
            },
            from: (value: string) => {
                return value.split('$');
            }
        }
    })
    components: string;

    @Column({ nullable: true })
    material: string;

    @Column()
    ritual: boolean;

    @Column()
    duration: string;

    @Column()
    concentration: boolean;

    @Column()
    casting_time: string;

    @Column()
    level: number;

    @Column({ nullable: true })
    attack_type: string;

    @Column('simple-json', {
        transformer: {
            to: (value: object) => {
                if (!value || !value['damage_type']) {
                    return null;
                }

                if (value['damage_type']['index']) {
                    value['damage_type'] = value['damage_type']['index'];
                }

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    damage: object;

    @Column('simple-json', {
        transformer: {
            to: (value: object) => {
                if (!value) {
                    return null;
                }

                if (value['dc_type']['index']) {
                    value['dc_type'] = value['dc_type']['index'];
                }

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    dc: object;

    @Column('simple-json', { nullable: true })
    heal_at_slot_level: object;

    @Column('simple-json', { nullable: true })
    area_of_effect: object;

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
            }
        }
    })
    school: string;
}
