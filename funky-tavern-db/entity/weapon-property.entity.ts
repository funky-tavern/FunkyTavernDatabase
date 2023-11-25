import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class WeaponProperty {
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
}