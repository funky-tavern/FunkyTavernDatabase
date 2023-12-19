import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class Proficiency {
    @PrimaryColumn()
    index: string

    @Column()
    type: string

    @Column()
    name: string
}