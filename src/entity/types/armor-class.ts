import { Static, Type } from '@sinclair/typebox';

export const ArmorClass = Type.Object({
    type: Type.String(),
    value: Type.Number(),
});
export type ArmorClass = Static<typeof ArmorClass>;
