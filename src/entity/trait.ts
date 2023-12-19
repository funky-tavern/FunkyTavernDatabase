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

    @Column("simple-json", {
        transformer: {
            to: (value: object[]|string[]) => {
                if (!value || value.length === 0) {
                    return null;
                }

                return value.map((value) => {
                    value["source"] = "srd";
                    return value;
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
    proficiencies: string

    @Column("simple-json",{
        transformer: {
            to: (value: object) => {
                if (!value) {
                    return null;
                }

                value["from"]["options"] = value["from"]["options"].map((option) => {
                    option["item"]["source"] = "srd"

                    return option["item"];
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
                    option["item"]["source"] = "srd"

                    return option["item"];
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
                    option["item"]["source"] = "srd"

                    return option["item"];
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