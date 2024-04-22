import { z } from 'zod';

export const TAction = z.object({
    name: z.string(),
    multiattack_type: z.string().optional(),
    desc: z.string(),
    attack_bonus: z.number().optional(),
    dc: z
        .object({
            dc_type: z.string(),
            dc_value: z.number(),
            success_type: z.string(),
        })
        .optional(),
    damage: z
        .array(
            z.object({
                damage_type: z.string(),
                damage_dice: z.string(),
            }),
        )
        .optional(),
    actions: z.array(
        z.object({
            action_name: z.string(),
            count: z.number(),
            type: z.string(),
        }),
    ),
});

export type TAction = z.infer<typeof TAction>;
