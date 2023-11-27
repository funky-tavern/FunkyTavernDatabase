import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class MagicItem {
    @PrimaryColumn()
    index: string

    @Column()
    name: string

    @Column({
        transformer: {
            to: (value: object|string) => {
                if (typeof value === "string") {
                    return value;
                }
                return value["index"];
            },
            from: (value: string) => {
                return value;
            }
        }
    })
    equipment_category: string

    @Column({
        transformer: {
            to: (value: object|string) => {
                if (typeof value === "string") {
                    return value;
                }
                return value["name"];
            },
            from: (value: string) => {
                return value;
            }
        }
    })
    rarity: string

    @Column({
        transformer: {
            to: (values: object[]|string[]) => {
                if (!values || values.length === 0) {
                    return null;
                }

                if (typeof values[0] === "string") {
                    return values.join("$");
                }

                return values.map((value) => value["index"]).join("$");
            },
            from: (value: string) => {
                if (value && value.length > 0) {
                    return value.split("$");
                }
                return null;
            }
        },
        nullable: true
    })
    variants: string

    @Column()
    variant: boolean

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
}