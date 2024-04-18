import { z } from 'zod';

import { OptionArray, OptionFromResourceList, OptionReference, Options } from './option.interface';

export const LanguageOption = Options(
    z.union([
        OptionArray(OptionReference),
        OptionFromResourceList('languages')
    ])
);
export type LanguageOption = z.infer<typeof LanguageOption>;