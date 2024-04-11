import { z } from "zod";


export const ArmorClassType = z.object({
    type: z.string(),
    value: z.number(),
});

export type ArmorClassType = z.infer<typeof ArmorClassType>;
