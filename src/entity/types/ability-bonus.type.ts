import { z } from 'zod';

export const TAbilityBonus = z.object({
    ability_score: z.string(),
    bonus: z.number(),
});

export type TAbilityBonus = z.infer<typeof TAbilityBonus>;
