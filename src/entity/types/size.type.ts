import { z } from 'zod';

export const TSize = z.union([
    z.literal('Tiny'),
    z.literal('Small'),
    z.literal('Medium'),
    z.literal('Large'),
    z.literal('Huge'),
    z.literal('Gargantuan'),
]);

export type TSize = z.infer<typeof TSize>;
