import { z } from "zod";


export const EQUIPMENT_QUANTITY = z.object({
    quantity: z.number(),
    equipment: z.string(),
});

export type EQUIPMENT_QUANTITY = z.infer<typeof EQUIPMENT_QUANTITY>;
