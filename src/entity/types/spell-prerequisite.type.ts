import { z } from 'zod';

export const TSpellPrerequisite = z.object({
    prerequisites: z.array(
        z.object({
            type: z.string(),
            index: z.string(),
        }),
    ),
    spell: z.string(),
});

export type TSpellPrerequisite = z.infer<typeof TSpellPrerequisite>;
