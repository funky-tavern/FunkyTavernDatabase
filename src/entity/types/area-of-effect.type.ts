import { type Static, Type } from '@sinclair/typebox';

export const AREA_OF_EFFECT = Type.Object({
    type: Type.Union([
        Type.Literal('cone'),
        Type.Literal('cube'),
        Type.Literal('cylinder'),
        Type.Literal('line'),
        Type.Literal('sphere'),
    ]),
    size: Type.Number(),
    size_unit: Type.Union([Type.Literal('feet'), Type.Literal('meters')]),
});
export type AREA_OF_EFFECT = Static<typeof AREA_OF_EFFECT>;
