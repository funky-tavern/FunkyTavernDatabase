import { z } from 'zod';

export const TCharacterLevels = z.object({
    1: z.string().optional(),
    2: z.string().optional(),
    3: z.string().optional(),
    4: z.string().optional(),
    5: z.string().optional(),
    6: z.string().optional(),
    7: z.string().optional(),
    8: z.string().optional(),
    9: z.string().optional(),
    10: z.string().optional(),
    11: z.string().optional(),
    12: z.string().optional(),
    13: z.string().optional(),
    14: z.string().optional(),
    15: z.string().optional(),
    16: z.string().optional(),
    17: z.string().optional(),
    18: z.string().optional(),
    19: z.string().optional(),
    20: z.string().optional(),
});

export type TCharacterLevels = z.infer<typeof TCharacterLevels>;

export const TSpellLevels = z.object({
    1: z.string().optional(),
    2: z.string().optional(),
    3: z.string().optional(),
    4: z.string().optional(),
    5: z.string().optional(),
    6: z.string().optional(),
    7: z.string().optional(),
    8: z.string().optional(),
    9: z.string().optional(),
});

export type TSpellLevels = z.infer<typeof TSpellLevels>;
