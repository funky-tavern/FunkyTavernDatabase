import { z } from "zod";


export const ClassPrerequisites = z.object({
    ability_score: z.string(),
    minimum_score: z.number(),
});

export type ClassPrerequisites = z.infer<typeof ClassPrerequisites>;