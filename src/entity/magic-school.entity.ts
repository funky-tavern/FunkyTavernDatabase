import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class MagicSchool {
    @PrimaryColumn()
    index: string

    @Column()
    name: string

    @Column()
    desc: string
}