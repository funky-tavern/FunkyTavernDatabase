import { OptionReference, Options } from './option.interface';

import { Type, type Static } from '@sinclair/typebox';

export const LanguageOption = Options(OptionReference);
export type LanguageOption = Static<typeof LanguageOption>;
