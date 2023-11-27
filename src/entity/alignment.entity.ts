import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class Alignment {
    @PrimaryColumn()
    index: string

    @Column()
    name: string

    @Column()
    abbreviation: string

    @Column()
    desc: string
}