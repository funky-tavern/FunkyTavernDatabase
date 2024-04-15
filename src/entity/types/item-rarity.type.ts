import { z } from "zod";


export const ITEM_RARITY = z.union([
    z.literal('Common'),
    z.literal('Uncommon'),
    z.literal('Rare'),
    z.literal('Very Rare'),
    z.literal('Legendary'),
]);

export type ITEM_RARITY = z.infer<typeof ITEM_RARITY>;