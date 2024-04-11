import { z } from "zod";


export const HEAL_AT_SLOT_LEVEL = z.object({
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

export type HEAL_AT_SLOT_LEVEL = z.infer<typeof HEAL_AT_SLOT_LEVEL>;
