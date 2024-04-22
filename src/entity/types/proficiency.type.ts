import { z } from 'zod';

export const TProficiencyType = z.union([
    z.literal('equipment'),
    z.literal('equipment-categories'),
    z.literal('ability-scores'),
    z.literal('skills'),
]);

export type TProficiencyType = z.infer<typeof TProficiencyType>;
