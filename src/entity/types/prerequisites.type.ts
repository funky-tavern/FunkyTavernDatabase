import { type Static, Type } from '@sinclair/typebox';

export const PREREQUISITES = Type.Union([
    Type.Object({
        type: Type.Literal('spell'),
        spell: Type.String(),
    }),
    Type.Object({
        type: Type.Literal('level'),
        level: Type.Integer(),
    }),
    Type.Object({
        type: Type.Literal('feature'),
        feature: Type.String(),
    }),
]);
export type PREREQUISITES = Static<typeof PREREQUISITES>;
