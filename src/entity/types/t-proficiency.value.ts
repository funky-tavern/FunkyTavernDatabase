import { z } from 'zod';

export const TProficiencyValue = z.object({
    value: z.string(),
    proficienty: z.string(),
});

export type TProficiencyValue = z.infer<typeof TProficiencyValue>;
