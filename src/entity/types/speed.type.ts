import { z } from "zod";


export const SpeedType = z.object({
    walk: z.string(),
    swim: z.string(),
});

export type SpeedType = z.infer<typeof SpeedType>;