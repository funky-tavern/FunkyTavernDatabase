import { OptionChoice, OptionReference, Options } from './option.interface';

import { Type, type Static } from '@sinclair/typebox';

export const ProficiencyChoices = Options(
    Type.Union([OptionReference, OptionChoice])
);
export type ProficiencyChoices = Static<typeof ProficiencyChoices>;
