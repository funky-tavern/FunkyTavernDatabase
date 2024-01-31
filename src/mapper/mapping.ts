import { AbilityScore } from '../entity/ability-score.entity';
import { Alignment } from '../entity/alignment.entity';
import { RuleSection } from '../entity/rule-section.entity';
import { Rules } from '../entity/rules.entity';
import { DamageType } from '../entity/damage-type.entity';
import { EquipmentCategory } from '../entity/equipment-categories.entity';
import { WeaponProperty } from '../entity/weapon-property.entity';
import { Equipment } from '../entity/equipment.entity';
import { MagicItem } from '../entity/magic-item.entity';
import { Proficiency } from '../entity/proficiency.entity';
import { Language } from '../entity/language.entity';
import { Race } from '../entity/race.entity';
import { MagicSchool } from '../entity/magic-school.entity';
import { Trait } from '../entity/trait';
import { Spell } from '../entity/spell.entity';
import { Background } from '../entity/background.entity';
import { Condition } from '../entity/condition.entity';
import { Feat } from '../entity/feat.entity';
import { Monster } from '../entity/monster.entity';
import { SubClass } from '../entity/subclass.entity';
import { SubRace } from '../entity/subrace.entity';
import { Skill } from '../entity/skill.entity';
import { Level } from '../entity/level.entity';
import { Feature } from '../entity/feature.entity';
import { Class } from '../entity/class.entity';

const API_BASE_URL = 'https://www.dnd5eapi.co/api';

type ParentMapping = {
    parent: any;
    path: string;
};

type EntityMapping = {
    entity: any;
    path?: string;
    parents?: ParentMapping[];
    subpath?: string;
};

const ENTITY_MAPPINGS: EntityMapping[] = [
    // {entity: AbilityScore, path: `${API_BASE_URL}/ability-scores`},
    // {entity: Alignment, path: `${API_BASE_URL}/alignments`},
    // {entity: Background, path: `${API_BASE_URL}/backgrounds`},
    // {entity: Class, path: `${API_BASE_URL}/classes`},
    // {entity: Condition, path: `${API_BASE_URL}/conditions`},
    // {entity: DamageType, path: `${API_BASE_URL}/damage-types`},
    // {entity: Equipment, path: `${API_BASE_URL}/equipment`},
    // {entity: EquipmentCategory, path: `${API_BASE_URL}/equipment-categories`},
    // {entity: Feat, path: `${API_BASE_URL}/feats`},
    // {entity: Feature, path: `${API_BASE_URL}/features`},
    // {entity: Language, path: `${API_BASE_URL}/languages`},
    // {entity: MagicItem, path: `${API_BASE_URL}/magic-items`},
    // {entity: Monster, path: `${API_BASE_URL}/monsters`},
    // {entity: Proficiency, path: `${API_BASE_URL}/proficiencies`},
    // {entity: Race, path: `${API_BASE_URL}/races`},
    // {entity: RuleSection, path: `${API_BASE_URL}/rule-sections`},
    // {entity: Rules, path: `${API_BASE_URL}/rules`},
    // {entity: Skill, path: `${API_BASE_URL}/skills`},
    // {entity: Spell, path: `${API_BASE_URL}/spells`},
    // {entity: SubClass, path: `${API_BASE_URL}/subclasses`},
    // {entity: SubRace, path: `${API_BASE_URL}/subraces`},
    // { entity: Trait, path: `${API_BASE_URL}/traits` },
    // {entity: WeaponProperty, path: `${API_BASE_URL}/weapon-properties`},
    // {entity: MagicSchool, path: `${API_BASE_URL}/magic-schools`},
    // {
    //     entity: Level, parents: [
    //         {parent: Class, path: `${API_BASE_URL}/classes`},
    //         {parent: SubClass, path: `${API_BASE_URL}/subclasses`}
    //     ], subpath: "levels"
    // },
];

const ENTITIES = ENTITY_MAPPINGS.map(entityMapping => entityMapping.entity);

export type { EntityMapping };
export { ENTITY_MAPPINGS };
export { ENTITIES };
