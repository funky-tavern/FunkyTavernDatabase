import { Type, type Static, type TSchema } from '@sinclair/typebox';

// Option Set Type Definition
export const OptionArray = <T extends TSchema>(T: T) =>
    Type.Object({
        options: Type.Array(T),
    });

export const OptionEquipmentCategory = Type.Object({
    equipment_category: Type.String(),
});


// Options Definition
export const Options = <T extends TSchema>(T: T) =>
    Type.Object({
        desc: Type.String(),
        type: Type.String(),
        choose: Type.Number(),
        from: T,
    });

// OptionSet Type Definition
export const OptionReference = Type.String();
export type OptionReference = Static<typeof OptionReference>;


export const OptionCountedReference = Type.Object({
    count: Type.Number(),
    of: Type.String(),
});
export type OptionCountedReference = Static<typeof OptionCountedReference>;


export const OptionChoice = <T extends TSchema>(T: T) => Options(T);
