import { z } from "zod";


export const AREA_OF_EFFECT = z.object({
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

export type AREA_OF_EFFECT = z.infer<typeof AREA_OF_EFFECT>;