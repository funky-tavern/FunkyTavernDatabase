import { z } from "zod";


export const USAGE = z.object({
    type: z.union([
        z.literal('at_will'),
        z.literal('per_day'),
        z.literal('per_rest'),
    ]),
    rest_type: z.union([z.literal('short'), z.literal('long')]),
    times: z.number(),
});

export type USAGE = z.infer<typeof USAGE>;