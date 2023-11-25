import { Entity, PrimaryColumn, Column } from "typeorm"


@Entity()
export class EquipmentCategory {
    @PrimaryColumn()
    index: string

    @Column()
    name: string
}