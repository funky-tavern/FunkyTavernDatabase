import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class RuleSection {
    @PrimaryColumn()
    index: string

    @Column()
    name: string

    @Column()
    desc: string
}