import { z } from 'zod';

export const TPrerequisites = z.union([
    z.object({
        type: z.literal('spell'),
        spell: z.string(),
    }),
    z.object({
        type: z.literal('level'),
        level: z.number(),
    }),
    z.object({
        type: z.literal('feature'),
        feature: z.string(),
    }),
    z.object({
        type: z.literal('ability_score'),
        ability_score: z.string(),
        minimum: z.number(),
    }),
]);

export type TPrerequisites = z.infer<typeof TPrerequisites>;
