import { z } from "zod";


export const SpecialAbility = z.object({
    name: z.string(),
    desc: z.string(),
    dc: z.object({
        dc_type: z.string(),
        dc_value: z.number(),
        success_type: z.string(),
    }).optional(),
});

export type SpecialAbility = z.infer<typeof SpecialAbility>;
