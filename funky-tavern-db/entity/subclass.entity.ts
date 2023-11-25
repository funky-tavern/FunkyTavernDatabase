import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class SubClass {
    @PrimaryColumn()
    index: string

    @Column({
        transformer: {
            to: (value: object|string) => {
                if (typeof value === 'string') {
                    return value
                }
                return value["index"]
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