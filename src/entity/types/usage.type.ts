import { type Static, Type } from '@sinclair/typebox';


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