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
