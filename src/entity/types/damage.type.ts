import { type Static, Type } from '@sinclair/typebox';

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
