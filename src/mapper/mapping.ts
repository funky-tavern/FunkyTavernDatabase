import { DataSource, ObjectLiteral } from 'typeorm';
import EntityMapper from './entity_mapper/interface/entity-mapper.interface';
import { AbilityScore } from '../entity/ability-score.entity';
import AbilityScoreMapper from './entity_mapper/ability-score.mapper';
import { SubRace } from '../entity/subrace.entity';
import SubRaceMapper from './entity_mapper/subrace.mapper';
import { Feat } from '../entity/feat.entity';
import FeatMapper from './entity_mapper/feat.mapper';
import { Skill } from '../entity/skill.entity';
import SkillMapper from './entity_mapper/skill.mapper';
import { Language } from '../entity/language.entity';
import LanguageMapper from './entity_mapper/language.mapper';
import { Alignment } from '../entity/alignment.entity';
import AlignmentMapper from './entity_mapper/alignments.mapper';
import { Condition } from '../entity/condition.entity';
import ConditionMapper from './entity_mapper/condition.mapper';
import { DamageType } from '../entity/damage-type.entity';
import DamageTypeMapper from './entity_mapper/damage-type.mapper';
import { EquipmentCategory } from '../entity/equipment-categories.entity';
import EquipmentCategoryMapper from './entity_mapper/equipment-category.mapper';
import { MagicItem } from '../entity/magic-item.entity';
import MagicItemMapper from './entity_mapper/magic-item.mapper';
import { Background } from '../entity/background.entity';
import BackgroundMapper from './entity_mapper/background.mapper';
import { RuleSection } from '../entity/rule-section.entity';
import RuleSectionMapper from './entity_mapper/rule-sections.mapper';
import { Rules } from '../entity/rules.entity';
import RulesMapper from './entity_mapper/rules.mapper';
import { WeaponProperty } from '../entity/weapon-property.entity';
import WeaponPropertyMapper from './entity_mapper/weapon-property.mapper';
import { Equipment } from '../entity/equipment.entity';
import EquipmentMapper from './entity_mapper/equipment.mapper';
import { Proficiency } from '../entity/proficiency.entity';
import ProficiencyMapper from './entity_mapper/proficiency.mapper';
import { Trait } from '../entity/trait';
import TraitMapper from './entity_mapper/traits.mapper';
import { Race } from '../entity/race.entity';
import RaceMapper from './entity_mapper/race.mapper';
import { Monster } from '../entity/monster.entity';
import MonsterMapper from './entity_mapper/monster.mapper';
import { MagicSchool } from '../entity/magic-school.entity';
import MagicSchoolMapper from './entity_mapper/magic-school.mapper';
import { Spell } from '../entity/spell.entity';
import SpellMapper from './entity_mapper/spell.mapper';
import { Class } from '../entity/class.entity';
import ClassMapper from './entity_mapper/class.mapper';
import { SpellList } from '../entity/spell-list.entity';
import { SubClass } from '../entity/subclass.entity';
import SubClassMapper from './entity_mapper/subclass.mapper';
import { Feature } from '../entity/feature.entity';
import FeatureMapper from './entity_mapper/feature.mapper';
import { Level } from '../entity/level.entity';
import LevelMapper from './entity_mapper/level.mapper';
import * as dotenv from 'dotenv';
import * as path from 'node:path';

const envPath = path.resolve(__dirname, '..', '..', '.env');
dotenv.config({ path: envPath });

const API_BASE_URL = process.env.API_PATH
    ? process.env.API_PATH
    : 'https://www.dnd5eapi.co/api';

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
    {
        entity: Feat,
        mapper: FeatMapper,
        path: `${API_BASE_URL}/feats`,
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
        entity: MagicItem,
        mapper: MagicItemMapper,
        path: `${API_BASE_URL}/magic-items`,
    },
    {
        entity: Background,
        mapper: BackgroundMapper,
        path: `${API_BASE_URL}/backgrounds`,
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
        entity: Trait,
        mapper: TraitMapper,
        path: `${API_BASE_URL}/traits`,
    },
    {
        entity: Monster,
        mapper: MonsterMapper,
        path: `${API_BASE_URL}/monsters`,
    },
    {
        entity: MagicSchool,
        mapper: MagicSchoolMapper,
        path: `${API_BASE_URL}/magic-schools`,
    },
    {
        entity: Spell,
        mapper: SpellMapper,
        path: `${API_BASE_URL}/spells`,
    },
    {
        entity: Class,
        mapper: ClassMapper,
        path: `${API_BASE_URL}/classes`,
        subresources: [
            {
                path: 'spells',
                entity: SpellList,
            },
        ],
    },
    {
        entity: SubClass,
        mapper: SubClassMapper,
        path: `${API_BASE_URL}/subclasses`,
    },
    {
        entity: Feature,
        mapper: FeatureMapper,
        path: `${API_BASE_URL}/features`,
    },
    {
        entity: Level,
        mapper: LevelMapper,
        parents: [
            {
                parent: Class,
                path: `${API_BASE_URL}/classes`,
            },
            {
                parent: SubClass,
                path: `${API_BASE_URL}/subclasses`,
            },
        ],
        subpath: 'levels',
    },
    {
        entity: Race,
        mapper: RaceMapper,
        path: `${API_BASE_URL}/races`,
    },
    {
        entity: SubRace,
        mapper: SubRaceMapper,
        path: `${API_BASE_URL}/subraces`,
    },
];

export const ENTITIES = ENTITY_MAPPINGS.map(
    entityMapping => entityMapping.entity,
);

export type { Mappings, EntityMapping, ParentMapping };
