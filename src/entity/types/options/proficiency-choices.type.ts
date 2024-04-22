import { z } from 'zod';

import {
    OptionArray,
    OptionChoice,
    OptionReference,
    Options,
} from './option.interface';

export const ProficiencyChoices = Options(
    z.union([OptionArray(OptionReference), OptionChoice(OptionReference)]),
);
export type ProficiencyChoices = z.infer<typeof ProficiencyChoices>;
