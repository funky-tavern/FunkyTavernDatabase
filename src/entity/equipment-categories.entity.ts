import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class EquipmentCategory {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;
}
