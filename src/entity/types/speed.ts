import { Static, Type } from '@sinclair/typebox';

export const Speed = Type.Object({
    walk: Type.String(),
    swim: Type.String(),
});
export type Speed = Static<typeof Speed>;
