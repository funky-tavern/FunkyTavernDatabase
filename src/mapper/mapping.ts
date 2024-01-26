import {AbilityScore} from "../entity/ability-score.entity";
import { Alignment } from "../entity/alignment.entity";
import {RuleSection} from "../entity/rule-section.entity";
import {Rules} from "../entity/rules.entity";
import {DamageType} from "../entity/damage-type.entity";
import {EquipmentCategory} from "../entity/equipment-categories.entity";
import {WeaponProperty} from "../entity/weapon-property.entity";
import {Equipment} from "../entity/equipment.entity";
import {MagicItem} from "../entity/magic-item.entity";
import {Proficiency} from "../entity/proficiency.entity";
import {Language} from "../entity/language.entity";
import {Race} from "../entity/race.entity";
import {MagicSchool} from "../entity/magic-school.entity";
import {Trait} from "../entity/trait";
import {Spell} from "../entity/spell.entity";
import {Background} from "../entity/background.entity";
import {Condition} from "../entity/condition.entity";
import {Feat} from "../entity/feat.entity";
import {Monster} from "../entity/monster.entity";
import {SubClass} from "../entity/subclass.entity";
import {SubRace} from "../entity/subrace.entity";
import {Skill} from "../entity/skill.entity";
import {Level} from "../entity/level.entity";
import {Feature} from "../entity/feature.entity";
import {Class} from "../entity/class.entity";


const ENTITY_MAPPINGS: { entity: any; path: string; }[] = [
    { entity: AbilityScore, path: "https://www.dnd5eapi.co/api/ability-scores" },
    { entity: Alignment, path: "https://www.dnd5eapi.co/api/alignments" },
    { entity: Background, path: "https://www.dnd5eapi.co/api/backgrounds" },
    { entity: Class, path: "https://www.dnd5eapi.co/api/classes" },
    { entity: Condition, path: "https://www.dnd5eapi.co/api/conditions" },
    { entity: DamageType, path: "https://www.dnd5eapi.co/api/damage-types" },
    { entity: Equipment, path: "https://www.dnd5eapi.co/api/equipment" },
    { entity: EquipmentCategory, path: "https://www.dnd5eapi.co/api/equipment-categories" },
    { entity: Feat, path: "https://www.dnd5eapi.co/api/feats" },
    { entity: Feature, path: "https://www.dnd5eapi.co/api/features"},
    { entity: Language, path: "https://www.dnd5eapi.co/api/languages" },
    { entity: MagicItem, path: "https://www.dnd5eapi.co/api/magic-items" },
    { entity: Monster, path: "https://www.dnd5eapi.co/api/monsters" },
    { entity: Proficiency, path: "https://www.dnd5eapi.co/api/proficiencies" },
    { entity: Race, path: "https://www.dnd5eapi.co/api/races" },
    { entity: RuleSection, path: "https://www.dnd5eapi.co/api/rule-sections" },
    { entity: Rules, path: "https://www.dnd5eapi.co/api/rules" },
    { entity: Skill, path: "https://www.dnd5eapi.co/api/skills"},
    { entity: Spell, path: "https://www.dnd5eapi.co/api/spells" },
    { entity: SubClass, path: "https://www.dnd5eapi.co/api/subclasses" },
    { entity: SubRace, path: "https://www.dnd5eapi.co/api/subraces" },
    { entity: Trait, path: "https://www.dnd5eapi.co/api/traits" },
    { entity: WeaponProperty, path: "https://www.dnd5eapi.co/api/weapon-properties" },
    { entity: MagicSchool, path: "https://www.dnd5eapi.co/api/magic-schools" },
    { entity: Level, path: "https://www.dnd5eapi.co/api/levels"},
];

const ENTITIES = ENTITY_MAPPINGS.map(
    (entityMapping) => entityMapping.entity
);

export { ENTITY_MAPPINGS };
export { ENTITIES };