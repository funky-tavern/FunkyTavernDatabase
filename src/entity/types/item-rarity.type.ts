import { z } from 'zod';

export const TItemRarity = z.union([
    z.literal('Common'),
    z.literal('Uncommon'),
    z.literal('Rare'),
    z.literal('Very Rare'),
    z.literal('Legendary'),
]);

export type TItemRarity = z.infer<typeof TItemRarity>;
