import { z } from "zod";


export const EQUIPMENT_QUANTITY_TYPE = z.object({
    quantity: z.number(),
    equipment: z.string(),
});

export type EQUIPMENT_QUANTITY_TYPE = z.infer<typeof EQUIPMENT_QUANTITY_TYPE>;
