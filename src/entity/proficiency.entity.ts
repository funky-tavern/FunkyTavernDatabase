import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class Proficiency {
    @PrimaryColumn()
    index: string

    @Column()
    type: string

    @Column()
    name: string

    @Column("simple-json", {
        transformer: {
            to: (value: object) => {
                if (!value) {
                    return null;
                }

                if (value["url"]) {
                    value["type"] = value["url"].split("/")[2];
                    delete value["url"];
                }

                if (value["name"]) {
                    delete value["name"];
                }

                return value;
            },
            from: (value: object) => {
                return value;
            }
        }
    })
    reference: object
}