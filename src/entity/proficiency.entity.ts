import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import ProficiencyReferenceType from './types/proficiency-type.type';
import { Skill } from './skill.entity';
import { AbilityScore } from './ability-score.entity';
import { EquipmentCategory } from './equipment-categories.entity';
import { Equipment } from './equipment.entity';

@Entity()
export class Proficiency {
    @PrimaryColumn()
    index: string;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    reference_type: ProficiencyReferenceType;

    @ManyToOne(() => Equipment, { nullable: true })
    equipment: Equipment;

    @ManyToOne(() => EquipmentCategory, { nullable: true })
    equipment_categories: EquipmentCategory;

    @ManyToOne(() => AbilityScore, { nullable: true })
    ability_scores: AbilityScore;

    @ManyToOne(() => Skill, { nullable: true })
    skills: Skill;
}
