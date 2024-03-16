import { AbilityScore } from '../entity/ability-score.entity';
import { Skill } from '../entity/skill.entity';
import AbilityScoreMapper from './entity_mapper/ability-score.mapper';
import SkillMapper from './entity_mapper/skill.mapper';

const API_BASE_URL = 'https://www.dnd5eapi.co/api';

type ParentMapping = {
    parent: any;
    path: string;
};

type EntityMapping = {
    entity: any;
    mapper?: any;
    path?: string;
    parents?: ParentMapping[];
    subpath?: string;
};

const ENTITY_MAPPINGS: EntityMapping[] = [
    {entity: AbilityScore, mapper: AbilityScoreMapper, path: `${API_BASE_URL}/ability-scores`},
    {entity: Skill, mapper: SkillMapper, path: `${API_BASE_URL}/skills`},
];

const ENTITIES = ENTITY_MAPPINGS.map(entityMapping => entityMapping.entity);

export type { EntityMapping };
export { ENTITY_MAPPINGS };
export { ENTITIES };
