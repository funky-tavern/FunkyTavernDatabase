import { z } from 'zod';

export const TSpeed = z.object({
    walk: z.string(),
    swim: z.string(),
});

export type TSpeed = z.infer<typeof TSpeed>;
