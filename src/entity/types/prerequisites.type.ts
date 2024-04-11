import { z } from "zod";


export const PREREQUISITES = z.union([
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
]);

export type PREREQUISITES = z.infer<typeof PREREQUISITES>;