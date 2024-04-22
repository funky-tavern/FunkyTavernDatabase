import { z } from 'zod';

export const TSpecialAbility = z.object({
    name: z.string(),
    desc: z.string(),
    dc: z
        .object({
            dc_type: z.string(),
            dc_value: z.number(),
            success_type: z.string(),
        })
        .optional(),
});

export type TSpecialAbility = z.infer<typeof TSpecialAbility>;
