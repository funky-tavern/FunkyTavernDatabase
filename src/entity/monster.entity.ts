import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Monster {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    desc: string;

    @Column()
    size: string;

    @Column()
    type: string;

    @Column({ nullable: true })
    subtype: string;

    @Column()
    alignment: string;

    @Column('simple-json')
    armor_class: string;

    hit_points: number;

    hit_dice: string;

    hit_points_roll: string;

    @Column('simple-json')
    speed: string;

    @Column()
    strength: number;

    @Column()
    dexterity: number;

    @Column()
    constitution: number;

    @Column()
    intelligence: number;

    @Column()
    wisdom: number;

    @Column()
    charisma: number;

    @Column('simple-json', {
        transformer: {
            to: (values: object[]) => {
                return values.map((value) => {
                    if (!value['proficiency']['index']) {
                        value['proficiency'] = value['proficiency']['index'];
                    }

                    return value;
                });
            },
            from: (values: object[]) => {
                return values;
            }
        }
    })
    proficiencies: string;

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
    damage_vulnerabilities: string;

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
    damage_resistances: string;

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
    damage_immunities: string;

    @Column({
        transformer: {
            to: (values: object[] | string[]) => {
                return values
                    .map((value) => {
                        if (typeof value === 'string') {
                            return value;
                        }
                        return value['index'];
                    })
                    .join('$');
            },
            from: (value: string) => {
                return value.split('$');
            }
        }
    })
    condition_immunities: string;

    @Column('simple-json')
    senses: string;

    @Column()
    languages: string;

    @Column()
    challenge_rating: string;

    @Column()
    proficiency_bonus: number;

    @Column()
    xp: number;

    @Column('simple-json', {
        transformer: {
            to: (values: object[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map((value) => {
                    if (value['damage'] && value['damage'].length !== 0) {
                        value['damage'].forEach((damage) => {
                            if (damage['damage_type']['index']) {
                                damage['damage_type'] =
                                    damage['damage_type']['index'];
                            }
                            return damage;
                        });
                    }

                    return value;
                });
            },
            from: (values: object[]) => {
                return values;
            }
        },
        nullable: true
    })
    special_abilities: string;

    @Column('simple-json', {
        transformer: {
            to: (values: object[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map((value) => {
                    if (value['damage'] && value['damage'].length !== 0) {
                        value['damage'].forEach((damage) => {
                            if (
                                damage['damage_type'] &&
                                damage['damage_type']['index']
                            ) {
                                damage['damage_type'] =
                                    damage['damage_type']['index'];
                            }
                            return damage;
                        });
                    }

                    return value;
                });
            },
            from: (values: object[]) => {
                return values;
            }
        },
        nullable: true
    })
    actions: string;
}
