import { type Static, Type } from '@sinclair/typebox';

export const ClassPrerequisites = Type.Object({
    ability_score: Type.String(),
    minimum_score: Type.Number(),
});
export type ClassPrerequisites = Static<typeof ClassPrerequisites>;
