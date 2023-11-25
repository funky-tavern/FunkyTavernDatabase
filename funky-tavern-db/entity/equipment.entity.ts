import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class Equipment {
    @PrimaryColumn()
    index: string

    @Column()
    name: string

    @Column({
        transformer: {
            to: (value: object) => {
                return value["index"];
            },
            from: (value: string) => {
                return value;
            }
        }
    })
    equipment_category: string

    @Column({ nullable: true })
    weapon_category: string

    @Column({ nullable: true })
    weapon_range: string

    @Column({ nullable: true })
    category_range: string

    @Column("simple-json")
    cost: object

    @Column("simple-json", {
        transformer: {
            to: (value: object) => {
                if (!value || !value["damage_type"]) {
                    return null;
                }

                if (value["damage_type"]["index"]) {
                    value["damage_type"] = value["damage_type"]["index"];
                }

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    damage: object

    @Column("simple-json", { nullable: true })
    range: object

    @Column({ nullable: true })
    weight: number

    @Column({
        transformer: {
            to: (values: object[]|string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                if (typeof values[0] === "string") {
                    return values.join("$");
                }

                return values.map(property => property["index"]).join("$");
            },
            from: (value: string) => {
                if (!value || value.length === 0) {
                    return null;
                }
                return value.split("$");
            }
        },
        nullable: true
    })
    properties: string

    @Column("simple-json", { nullable: true })
    throw_range: object

    @Column("simple-json", {
        transformer: {
            to: (value: object) => {
                if (!value || !value["damage_type"]) {
                    return null
                }

                if (value["damage_type"]["index"]) {
                    value["damage_type"] = value["damage_type"]["index"];
                }

                return value;
            },
            from: (value: object) => {
                return value;
            }
        },
        nullable: true
    })
    two_handed_damage: object
}