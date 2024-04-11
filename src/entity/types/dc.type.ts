import { z } from "zod";


export const DC = z.object({
    dc_type: z.string(),
    success_type: z.union([
        z.literal('none'),
        z.literal('half'),
        z.literal('full'),
    ]),
});

export type DC = z.infer<typeof DC>;