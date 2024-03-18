import { Static, Type } from '@sinclair/typebox';

export const ProficiencyValueType = Type.Object({
    value: Type.String(),
    proficienty: Type.String(),
});
export type ProficiencyValueType = Static<typeof ProficiencyValueType>;
