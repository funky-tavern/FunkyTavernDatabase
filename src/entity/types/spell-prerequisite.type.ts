import { z } from "zod";


export const SpellPrerequisite = z.object({
    prerequisites: z.array(z.object({
        type: z.string(),
        index: z.string(),
    })),
    spell: z.string(),
});

export type SpellPrerequisite = z.infer<typeof SpellPrerequisite>;