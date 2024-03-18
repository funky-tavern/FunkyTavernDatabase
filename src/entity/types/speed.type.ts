import { Static, Type } from '@sinclair/typebox';

export const SpeedType = Type.Object({
    walk: Type.String(),
    swim: Type.String(),
});
export type SpeedType = Static<typeof SpeedType>;
