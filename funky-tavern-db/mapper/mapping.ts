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
import {Backgroud} from "../entity/backgroud.entity";
import {Condition} from "../entity/condition.entity";
import {Feat} from "../entity/feat.entity";
import {Monster} from "../entity/monster.entity";
import {SubClass} from "../entity/subclass.entity";
import {SubRace} from "../entity/subrace.entity";
import {Skill} from "../entity/skill.entity";
import {Level} from "../entity/level.entity";
import {Feature} from "../entity/feature.entity";


const ENTITY_MAPPINGS: { entity: any; path: string; }[] = [
    { entity: AbilityScore, path: "./funky-tavern-db/srd/ability-scores.json" },
    { entity: Alignment, path: "./funky-tavern-db/srd/alignments.json" },
    { entity: RuleSection, path: "./funky-tavern-db/srd/rule-sections.json" },
    { entity: Rules, path: "./funky-tavern-db/srd/rules.json" },
    { entity: DamageType, path: "./funky-tavern-db/srd/damage-types.json" },
    { entity: EquipmentCategory, path: "./funky-tavern-db/srd/equipment-categories.json" },
    { entity: WeaponProperty, path: "./funky-tavern-db/srd/weapon-properties.json" },
    { entity: Equipment, path: "./funky-tavern-db/srd/equipment.json" },
    { entity: MagicItem, path: "./funky-tavern-db/srd/magic-items.json" },
    { entity: Proficiency, path: "./funky-tavern-db/srd/proficiencies.json" },
    { entity: Language, path: "./funky-tavern-db/srd/languages.json" },
    { entity: MagicSchool, path: "./funky-tavern-db/srd/magic-schools.json" },
    { entity: Spell, path: "./funky-tavern-db/srd/spells.json" },
    { entity: Trait, path: "./funky-tavern-db/srd/traits.json" },
    { entity: Race, path: "./funky-tavern-db/srd/races.json" },
    { entity: Backgroud, path: "./funky-tavern-db/srd/backgrounds.json" },
    { entity: Condition, path: "./funky-tavern-db/srd/conditions.json" },
    { entity: Feat, path: "./funky-tavern-db/srd/feats.json" },
    { entity: Monster, path: "./funky-tavern-db/srd/monsters.json" },
    { entity: SubClass, path: "./funky-tavern-db/srd/subclasses.json" },
    { entity: SubRace, path: "./funky-tavern-db/srd/subraces.json" },
    { entity: Skill, path: "./funky-tavern-db/srd/skills.json"},
    { entity: Level, path: "./funky-tavern-db/srd/levels.json"},
    { entity: Feature, path: "./funky-tavern-db/srd/features.json"}
];

const ENTITIES = ENTITY_MAPPINGS.map(
    (entityMapping) => entityMapping.entity
);

export { ENTITY_MAPPINGS };
export { ENTITIES };