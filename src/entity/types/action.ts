import { Static, Type } from '@sinclair/typebox';

export const Action = Type.Object({
    name: Type.String(),
    multiattack_type: Type.Optional(Type.String()),
    desc: Type.String(),
    attack_bonus: Type.Optional(Type.Integer()),
    dc: Type.Optional(Type.Object({
        dc_type: Type.String(),
        dc_value: Type.Integer(),
        success_type: Type.String(),
    })),
    damage: Type.Optional(Type.Array(Type.Object({
        damage_type: Type.String(),
        damage_dice: Type.String(),
    }))),
    actions: Type.Array(Type.Object({
        action_name: Type.String(),
        count: Type.Integer(),
        type: Type.String(),
    })),
});
export type Action = Static<typeof Action>;
