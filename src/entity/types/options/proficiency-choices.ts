import {
    OptionArray,
    OptionChoice,
    OptionReference,
    Options,
} from './option.interface';

import { Type, type Static } from '@sinclair/typebox';

export const ProficiencyChoices = Options(
    Type.Union([OptionArray(OptionReference), OptionChoice(OptionReference)]),
);
export type ProficiencyChoices = Static<typeof ProficiencyChoices>;
