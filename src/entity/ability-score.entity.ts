import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class AbilityScore {
    @PrimaryColumn()
    index: string;

    @Column()
    name: string;

    @Column()
    full_name: string;

    @Column({
        transformer: {
            to: (value: string[]) => {
                return value.join('$');
            },
            from: (value: string) => {
                return value.split('$');
            }
        }
    })
    desc: string;
}
