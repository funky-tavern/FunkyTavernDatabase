import {Type, type Static, type TSchema} from '@sinclair/typebox'


export const Options = <T extends TSchema>(T: T) => Type.Object({
    desc: Type.String(),
    type: Type.String(),
    choose: Type.Number(),
    from: Type.Object({
        options: Type.Array(T)
    })
});


export const OptionReference = Type.String();
export type OptionReference = Static<typeof OptionReference>;

export const OptionCountedReference = Type.Object({
    count: Type.Number(),
    of: Type.String()
});
export type OptionCountedReference = Static<typeof OptionCountedReference>;

export const OptionChoice = Options(OptionReference);
export type OptionChoice = Static<typeof OptionChoice>;

const OptionSet = Type.Union([
    OptionReference,
    OptionCountedReference,
    OptionChoice
]);
export type OptionSet = Static<typeof OptionSet>;