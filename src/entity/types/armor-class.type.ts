import { z } from 'zod';

export const TArmorClass = z.object({
    type: z.string(),
    value: z.number(),
});

export type ArmorClass = z.infer<typeof TArmorClass>;
