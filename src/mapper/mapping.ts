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


const ENTITY_MAPPINGS: { entity: any; path: string; }[] = [
    { entity: AbilityScore, path: "./src/srd/ability-scores.json" },
    { entity: Alignment, path: "./src/srd/alignments.json" },
    { entity: RuleSection, path: "./src/srd/rule-sections.json" },
    { entity: Rules, path: "./src/srd/rules.json" },
    { entity: DamageType, path: "./src/srd/damage-types.json" },
    { entity: EquipmentCategory, path: "./src/srd/equipment-categories.json" },
    { entity: WeaponProperty, path: "./src/srd/weapon-properties.json" },
    { entity: Equipment, path: "./src/srd/equipment.json" },
    { entity: MagicItem, path: "./src/srd/magic-items.json" },
    { entity: Proficiency, path: "./src/srd/proficiencies.json" },
    { entity: Language, path: "./src/srd/languages.json" },
    { entity: MagicSchool, path: "./src/srd/magic-schools.json" },
    { entity: Spell, path: "./src/srd/spells.json" },
    { entity: Trait, path: "./src/srd/traits.json" },
    { entity: Race, path: "./src/srd/races.json" },
    { entity: Background, path: "./src/srd/backgrounds.json" },
    { entity: Condition, path: "./src/srd/conditions.json" },
    { entity: Feat, path: "./src/srd/feats.json" },
    { entity: Monster, path: "./src/srd/monsters.json" },
    { entity: SubClass, path: "./src/srd/subclasses.json" },
    { entity: SubRace, path: "./src/srd/subraces.json" },
    { entity: Skill, path: "./src/srd/skills.json"},
    { entity: Level, path: "./src/srd/levels.json"},
    { entity: Feature, path: "./src/srd/features.json"}
];

const ENTITIES = ENTITY_MAPPINGS.map(
    (entityMapping) => entityMapping.entity
);

export { ENTITY_MAPPINGS };
export { ENTITIES };