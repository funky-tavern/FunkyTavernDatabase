import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class SubRace {
    @PrimaryColumn()
    index: string

    @Column()
    name: string

    @Column("simple-json", {
        transformer: {
            to: (value: object|string) => {
                value["source"] = "srd"
                return value
            },
            from: (value: string) => {
                return value
            }
        }
    })
    race: string

    @Column()
    desc: string

    @Column("simple-json", {
        transformer: {
            to: (values: object[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map((value) => {
                    if (typeof value["ability_score"] !== "string") {
                        value["ability_score"] = value["ability_score"]["index"]
                    }

                    return value
                });
            },
            from: (value: object) => {
                return value
            }
        }
    })
    ability_bonuses: string

    @Column("simple-json", {
        transformer: {
            to: (values: object[]|string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map((value) => {
                    value["source"] = "srd";
                    return value
                });
            },
            from: (value: string) => {
                if (!value) {
                    return null;
                }
                return value;
            }
        },
        nullable: true
    })
    starting_proficiencies: string

    @Column("simple-json", {
        transformer: {
            to: (values: object[]|string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map((value) => {
                    value["source"] = "srd";
                    return value
                });
            },
            from: (value: string) => {
                if (!value) {
                    return null;
                }
                return value;
            }
        },
        nullable: true
    })
    languages: string

    @Column("simple-json", {
        transformer: {
            to: (value: object) => {
                if (!value || !value["from"]["options"] || value["from"]["options"].length === 0) {
                    return null;
                }

                if (value["type"]) {
                    delete value["type"];
                }

                value["from"]["options"] = value["from"]["options"].map((option) => {
                    option["source"] = "srd"
                    return option
                });

                return value;

            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    language_options: string

    @Column("simple-json", {
        transformer: {
            to: (values: object[]|string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                return values.map((value) => {
                    if (typeof value !== "string") {
                        value["source"] = "srd"
                        return value
                    }

                    return value
                });
            },
            from: (value: string) => {
                return value;
            }
        }
    })
    racial_traits: string
}