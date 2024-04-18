import { z } from 'zod';

export const TEquipmentQuantity = z.object({
    quantity: z.number(),
    equipment: z.string(),
});

export type TEquipmentQuantity = z.infer<typeof TEquipmentQuantity>;
