import { Static, Type } from '@sinclair/typebox';

export const SpecialAbility = Type.Object({
    name: Type.String(),
    desc: Type.String(),
    dc: Type.Optional(Type.Object({
        dc_type: Type.String(),
        dc_value: Type.Integer(),
        success_type: Type.String(),
    }))
});
export type SpecialAbility = Static<typeof SpecialAbility>;
