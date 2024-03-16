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
    {entity: AbilityScore, mapper: AbilityScoreMapper, path: `${API_BASE_URL}/ability-scores`},
    {entity: Skill, mapper: SkillMapper, path: `${API_BASE_URL}/skills`},
    {entity: Language, mapper: LanguageMapper, path: `${API_BASE_URL}/languages`},
    {entity: Alignment, mapper: AlignmentMapper, path: `${API_BASE_URL}/alignments`},
    {entity: Condition, mapper: ConditionMapper, path: `${API_BASE_URL}/conditions`},
    {entity: DamageType, mapper: DamageTypeMapper, path: `${API_BASE_URL}/damage-types`},
];

const ENTITIES = ENTITY_MAPPINGS.map(entityMapping => entityMapping.entity);

export type { EntityMapping };
export { ENTITY_MAPPINGS };
export { ENTITIES };
