import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class Rules {
    @PrimaryColumn()
    index: string

    @Column()
    name: string

    @Column()
    desc: string

    @Column({
        transformer: {
            to: (values: object[]|string[]) => {
                if (values.length === 0) {
                    return null;
                }

                if (typeof values[0] === "string") {
                    return values.join("$");
                }
                return values.map(section => section["index"]).join("$");
            },
            from: (value: string) => {
                return value.split("$");
            }
        }
    })
    subsections: string
}