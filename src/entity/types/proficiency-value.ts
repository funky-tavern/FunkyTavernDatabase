import { Static, Type } from '@sinclair/typebox';

export const ProficiencyValue = Type.Object({
    value: Type.String(),
    proficienty: Type.String(),
});
export type ProficiencyValue = Static<typeof ProficiencyValue>;
