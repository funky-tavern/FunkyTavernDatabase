import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class SubClass {
    @PrimaryColumn()
    index: string

    @Column({
        transformer: {
            to: (value: object|string) => {
                value["source"] = "srd"
                return value
            },
            from: (value: string) => value
        }
    })
    class: string

    @Column()
    name: string

    @Column()
    subclass_flavor: string

    @Column({
        transformer: {
            to: (values: string[]) => values.join('$'),
            from: (value: string) => value.split('$')
        }
    })
    desc: string
}