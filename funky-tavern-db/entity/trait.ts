import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class Trait {
    @PrimaryColumn()
    index: string

    @Column()
    name: string

    @Column({
        transformer: {
            to: (value: string[]) => {
                return value.join("$");
            },
            from: (value: string) => {
                return value.split("$");
            }
        }
    })
    desc: string

    @Column({
        transformer: {
            to: (value: object[]|string[]) => {
                if (!value || value.length === 0) {
                    return null;
                }

                return value.map((value) => {
                    if (typeof value === "string") {
                        return value;
                    }

                    return value["index"];
                }).join("$");
            },
            from: (value: string) => {
                if (!value) {
                    return null;
                }
                return value.split("$");
            }
        },
        nullable: true
    })
    proficiencies: string

    @Column("simple-json",{
        transformer: {
            to: (value: object) => {
                if (!value) {
                    return null;
                }

                value["from"]["options"] = value["from"]["options"].map((option) => {
                    if (typeof option === "string") {
                        return option;
                    }

                    return option["item"]["index"];
                });

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    proficiency_choices: object

    @Column("simple-json",{
        transformer: {
            to: (value: object) => {
                if (!value || !value["spell_options"]) {
                    return null;
                }

                value["spell_options"]["from"]["options"] = value["spell_options"]["from"]["options"].map((option) => {
                    if (typeof option === "string") {
                        return option;
                    }

                    return option["item"]["index"];
                });

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    trait_specific: object

    @Column("simple-json",{
        transformer: {
            to: (value: object) => {
                if (!value) {
                    return null;
                }

                value["from"]["options"] = value["from"]["options"].map((option) => {
                    if (typeof option === "string") {
                        return option;
                    }

                    return option["item"]["index"];
                });

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    language_options: object
}