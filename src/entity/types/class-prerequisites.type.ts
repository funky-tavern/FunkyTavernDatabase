import { z } from 'zod';

export const TClassPrerequisites = z.object({
    ability_score: z.string(),
    minimum_score: z.number(),
});

export type TClassPrerequisites = z.infer<typeof TClassPrerequisites>;
