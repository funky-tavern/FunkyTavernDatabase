import { AbilityScore } from '../entity/ability-score.entity';
import { Skill } from '../entity/skill.entity';
import AbilityScoreMapper from './entity_mapper/ability-score.mapper';
import SkillMapper from './entity_mapper/skill.mapper';
import { Language } from '../entity/language.entity';
import LanguageMapper from './entity_mapper/language.mapper';
import { Alignment } from '../entity/alignment.entity';
import AlignmentMapper from './entity_mapper/alignments.mapper';
import { Condition } from '../entity/condition.entity';
import ConditionMapper from './entity_mapper/condition.mapper';
import { DamageType } from '../entity/damage-type.entity';
import DamageTypeMapper from './entity_mapper/damage-type.mapper';
import EquipmentCategoryMapper from './entity_mapper/equipment-category.mapper';
import { EquipmentCategory } from '../entity/equipment-categories.entity';
import { RuleSection } from '../entity/rule-section.entity';
import RuleSectionMapper from './entity_mapper/rule-sections.mapper';
import { Rules } from '../entity/rules.entity';
import RulesMapper from './entity_mapper/rules.mapper';
import { WeaponProperty } from '../entity/weapon-property.entity';
import WeaponPropertyMapper from './entity_mapper/weapon-property.mapper';
import { Equipment } from '../entity/equipment.entity';
import EquipmentMapper from './entity_mapper/equipment.mapper';
import { Monster } from '../entity/monster.entity';
import MonsterMapper from './entity_mapper/monster.mapper';
import ProficiencyMapper from './entity_mapper/proficiency.mapper';
import { Proficiency } from '../entity/proficiency.entity';

const API_BASE_URL = 'https://www.dnd5eapi.co/api';

type ParentMapping = {
    parent: any;
    path: string;
};

type EntityMapping = {
    entity: any;
    mapper: any;
    path?: string;
    parents?: ParentMapping[];
    subpath?: string;
};

const ENTITY_MAPPINGS: EntityMapping[] = [
    {
        entity: AbilityScore,
        mapper: AbilityScoreMapper,
        path: `${API_BASE_URL}/ability-scores`,
    },
    { entity: Skill, mapper: SkillMapper, path: `${API_BASE_URL}/skills` },
    {
        entity: Language,
        mapper: LanguageMapper,
        path: `${API_BASE_URL}/languages`,
    },
    {
        entity: Alignment,
        mapper: AlignmentMapper,
        path: `${API_BASE_URL}/alignments`,
    },
    {
        entity: Condition,
        mapper: ConditionMapper,
        path: `${API_BASE_URL}/conditions`,
    },
    {
        entity: DamageType,
        mapper: DamageTypeMapper,
        path: `${API_BASE_URL}/damage-types`,
    },
    {
        entity: EquipmentCategory,
        mapper: EquipmentCategoryMapper,
        path: `${API_BASE_URL}/equipment-categories`,
    },
    {
        entity: RuleSection,
        mapper: RuleSectionMapper,
        path: `${API_BASE_URL}/rule-sections`,
    },
    { entity: Rules, mapper: RulesMapper, path: `${API_BASE_URL}/rules` },
    {
        entity: WeaponProperty,
        mapper: WeaponPropertyMapper,
        path: `${API_BASE_URL}/weapon-properties`,
    },
    {
        entity: Equipment,
        mapper: EquipmentMapper,
        path: `${API_BASE_URL}/equipment`,
    },
    {
        entity: Proficiency,
        mapper: ProficiencyMapper,
        path: `${API_BASE_URL}/proficiencies`,
    },
    {
        entity: Monster,
        mapper: MonsterMapper,
        path: `${API_BASE_URL}/monsters`,
    },
];

const ENTITIES = ENTITY_MAPPINGS.map(entityMapping => entityMapping.entity);

export type { EntityMapping };
export { ENTITY_MAPPINGS };
export { ENTITIES };
