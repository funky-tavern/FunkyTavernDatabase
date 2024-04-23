import { DataSource, ObjectLiteral } from 'typeorm';
import EntityMapper from './entity_mapper/interface/entity-mapper.interface';
import { AbilityScore } from '../entity/ability-score.entity';
import AbilityScoreMapper from './entity_mapper/ability-score.mapper';

const API_BASE_URL = 'https://www.dnd5eapi.co/api';

type BaseMapping = {
    entity: new () => ObjectLiteral;
    mapper: new (
        entity: new () => ObjectLiteral,
        dataSource: DataSource,
    ) => EntityMapper<ObjectLiteral>;
};

type ParentMapping = BaseMapping & {
    parents: {
        parent: new () => ObjectLiteral;
        path: string;
    }[];
    subpath: string;
};

type EntityMapping = BaseMapping & {
    path: string;
    subresources?: {
        path: string;
        entity: new () => ObjectLiteral;
    }[];
};

type Mappings = EntityMapping | ParentMapping;

export const ENTITY_MAPPINGS: Mappings[] = [
    {
        entity: AbilityScore,
        mapper: AbilityScoreMapper,
        path: `${API_BASE_URL}/ability-scores`,
    },
    // {
    //     entity: Feat,
    //     mapper: FeatMapper,
    //     path: `${API_BASE_URL}/feats`,
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
    // {
    //     entity: MagicItem,
    //     mapper: MagicItemMapper,
    //     path: `${API_BASE_URL}/magic-items`,
    // },
    // {
    //     entity: Background,
    //     mapper: BackgroundMapper,
    //     path: `${API_BASE_URL}/backgrounds`,
    // },
    // {
    //     entity: RuleSection,
    //     mapper: RuleSectionMapper,
    //     path: `${API_BASE_URL}/rule-sections`,
    // },
    // { entity: Rules, mapper: RulesMapper, path: `${API_BASE_URL}/rules` },
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
    //     entity: Trait,
    //     mapper: TraitMapper,
    //     path: `${API_BASE_URL}/traits`,
    // },
    // {
    //     entity: Race,
    //     mapper: RaceMapper,
    //     path: `${API_BASE_URL}/races`,
    // },
    // {
    //     entity: SubRace,
    //     mapper: SubRaceMapper,
    //     path: `${API_BASE_URL}/subraces`,
    // },
];

export const ENTITIES = ENTITY_MAPPINGS.map(
    entityMapping => entityMapping.entity,
);

export type { Mappings, EntityMapping, ParentMapping };
