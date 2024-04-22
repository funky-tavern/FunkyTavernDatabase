import { z } from 'zod';

export const TArmorClass = z.object({
    type: z.string(),
    value: z.number(),
});

export type TArmorClass = z.infer<typeof TArmorClass>;
