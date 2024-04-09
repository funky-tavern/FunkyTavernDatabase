import { OptionArray, OptionReference, Options } from './option.interface';

import { Type, type Static } from '@sinclair/typebox';

export const LanguageOption = Options(OptionArray(OptionReference));
export type LanguageOption = Static<typeof LanguageOption>;
