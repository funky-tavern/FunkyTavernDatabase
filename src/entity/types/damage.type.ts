import { z } from 'zod';
import { TCharacterLevels, TSpellLevels } from './levels.type';

export const TDamage = z.object({
    damage_type: z.string().optional(),
    damage_at_slot_level: z.optional(TSpellLevels),
    damage_at_character_level: z.optional(TCharacterLevels),
});

export type TDamage = z.infer<typeof TDamage>;
