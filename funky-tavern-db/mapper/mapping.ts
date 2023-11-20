import {AbilityScore} from "../entity/ability-score.entity";

const ENTITY_MAPPINGS = [
    { entity: AbilityScore, path: "./funky-tavern-db/srd/ability-scores.json" },
];

const ENTITIES = ENTITY_MAPPINGS.map(
    (entityMapping) => entityMapping.entity
);

export { ENTITY_MAPPINGS };
export { ENTITIES };