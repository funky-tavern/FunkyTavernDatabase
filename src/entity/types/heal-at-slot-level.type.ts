import { type Static, Type } from '@sinclair/typebox';

export const HEAL_AT_SLOT_LEVEL = Type.Object({
    1: Type.Optional(Type.String()),
    2: Type.Optional(Type.String()),
    3: Type.Optional(Type.String()),
    4: Type.Optional(Type.String()),
    5: Type.Optional(Type.String()),
    6: Type.Optional(Type.String()),
    7: Type.Optional(Type.String()),
    8: Type.Optional(Type.String()),
    9: Type.Optional(Type.String()),
});
export type HEAL_AT_SLOT_LEVEL = Static<typeof HEAL_AT_SLOT_LEVEL>;
