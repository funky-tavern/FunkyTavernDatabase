import { RuleSection } from '../entity/rule-section.entity';
import RuleSectionMapper from './entity_mapper/rule-sections.mapper';
import EntityMapper from './entity_mapper/interface/entity-mapper.interface';
import { ObjectLiteral } from 'typeorm/browser';
import { DataSource } from 'typeorm';
import { Rules } from '../entity/rules.entity';
import RulesMapper from './entity_mapper/rules.mapper';

const API_BASE_URL = 'https://www.dnd5eapi.co/api';

type ParentMapping = {
    parent: new () => ObjectLiteral;
    path: string;
};

type EntityMapping = {
    entity: new () => ObjectLiteral;
    mapper: new (
        entity: new () => ObjectLiteral,
        dataSource: DataSource,
    ) => EntityMapper<ObjectLiteral>;
    path?: string;
    parents?: ParentMapping[];
    subpath?: string;
};

const ENTITY_MAPPINGS: EntityMapping[] = [
    // {
    //     entity: AbilityScore,
    //     mapper: AbilityScoreMapper,
    //     path: `${API_BASE_URL}/ability-scores`,
    // },
    // { entity: Skill, mapper: SkillMapper, path: `${API_BASE_URL}/skills` },
    // {
    //     entity: Language,
    //     mapper: LanguageMapper,
    //     path: `${API_BASE_URL}/languages`,
    // },
    // {
    //     entity: Alignment,
    //     mapper: AlignmentMapper,
    //     path: `${API_BASE_URL}/alignments`,
    // },
    // {
    //     entity: Condition,
    //     mapper: ConditionMapper,
    //     path: `${API_BASE_URL}/conditions`,
    // },
    // {
    //     entity: DamageType,
    //     mapper: DamageTypeMapper,
    //     path: `${API_BASE_URL}/damage-types`,
    // },
    // {
    //     entity: EquipmentCategory,
    //     mapper: EquipmentCategoryMapper,
    //     path: `${API_BASE_URL}/equipment-categories`,
    // },
    {
        entity: RuleSection,
        mapper: RuleSectionMapper,
        path: `${API_BASE_URL}/rule-sections`,
    },
    { entity: Rules, mapper: RulesMapper, path: `${API_BASE_URL}/rules` },
    // {
    //     entity: WeaponProperty,
    //     mapper: WeaponPropertyMapper,
    //     path: `${API_BASE_URL}/weapon-properties`,
    // },
    // {
    //     entity: Equipment,
    //     mapper: EquipmentMapper,
    //     path: `${API_BASE_URL}/equipment`,
    // },
    // {
    //     entity: Proficiency,
    //     mapper: ProficiencyMapper,
    //     path: `${API_BASE_URL}/proficiencies`,
    // },
    // {
    //     entity: Monster,
    //     mapper: MonsterMapper,
    //     path: `${API_BASE_URL}/monsters`,
    // },
    // {
    //     entity: MagicSchool,
    //     mapper: MagicSchoolMapper,
    //     path: `${API_BASE_URL}/magic-schools`,
    // },
    // {
    //     entity: Spell,
    //     mapper: SpellMapper,
    //     path: `${API_BASE_URL}/spells`,
    // },
    // {
    //     entity: Class,
    //     mapper: ClassMapper,
    //     path: `${API_BASE_URL}/classes`,
    // },
    // {
    //     entity: SubClass,
    //     mapper: SubClassMapper,
    //     path: `${API_BASE_URL}/subclasses`,
    // },
    // {
    //     entity: Feature,
    //     mapper: FeatureMapper,
    //     path: `${API_BASE_URL}/features`,
    // },
    // {
    //     entity: Level,
    //     mapper: LevelMapper,
    //     parents: [
    //         {
    //             parent: Class,
    //             path: `${API_BASE_URL}/classes`
    //         },
    //         {
    //             parent: SubClass,
    //             path: `${API_BASE_URL}/subclasses`
    //         }
    //     ],
    //     subpath: 'levels'
    // }
];

const ENTITIES = ENTITY_MAPPINGS.map(entityMapping => entityMapping.entity);

export type { EntityMapping };
export { ENTITY_MAPPINGS };
export { ENTITIES };
