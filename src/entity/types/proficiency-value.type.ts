import { z } from "zod";


export const ProficiencyValueType = z.object({
    value: z.string(),
    proficienty: z.string(),
});

export type ProficiencyValueType = z.infer<typeof ProficiencyValueType>;
