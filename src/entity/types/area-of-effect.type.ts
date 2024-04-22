import { z } from 'zod';

export const TAreaOfEffect = z.object({
    type: z.union([
        z.literal('cone'),
        z.literal('cube'),
        z.literal('cylinder'),
        z.literal('line'),
        z.literal('sphere'),
    ]),
    size: z.number(),
    size_unit: z.union([z.literal('feet'), z.literal('meters')]),
});

export type TAreaOfEffect = z.infer<typeof TAreaOfEffect>;
