import { z } from 'zod';

import { OptionArray, OptionReference, Options } from './option.interface';

export const LanguageOption = Options(OptionArray(OptionReference));
export type LanguageOption = z.infer<typeof LanguageOption>;