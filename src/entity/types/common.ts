import { type Static, Type } from '@sinclair/typebox';

export const DC = Type.Object({
    dc_type: Type.String(),
    success_type: Type.Union([
        Type.Literal('none'),
        Type.Literal('half'),
        Type.Literal('full'),
    ]),
});
export type DC = Static<typeof DC>;

export const USAGE = Type.Object({
    type: Type.Union([
        Type.Literal('at_will'),
        Type.Literal('per_day'),
        Type.Literal('per_rest'),
    ]),
    rest_type: Type.Union([Type.Literal('short'), Type.Literal('long')]),
    times: Type.Number(),
});
export type USAGE = Static<typeof USAGE>;

export const DAMAGE = Type.Object({
    damage_type: Type.String(),
    damage_at_character_level: Type.Object({
        1: Type.Optional(Type.String()),
        2: Type.Optional(Type.String()),
        3: Type.Optional(Type.String()),
        4: Type.Optional(Type.String()),
        5: Type.Optional(Type.String()),
        6: Type.Optional(Type.String()),
        7: Type.Optional(Type.String()),
        8: Type.Optional(Type.String()),
        9: Type.Optional(Type.String()),
        10: Type.Optional(Type.String()),
        11: Type.Optional(Type.String()),
        12: Type.Optional(Type.String()),
        13: Type.Optional(Type.String()),
        14: Type.Optional(Type.String()),
        15: Type.Optional(Type.String()),
        16: Type.Optional(Type.String()),
        17: Type.Optional(Type.String()),
        18: Type.Optional(Type.String()),
        19: Type.Optional(Type.String()),
        20: Type.Optional(Type.String()),
    }),
});
export type DAMAGE = Static<typeof DAMAGE>;

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
