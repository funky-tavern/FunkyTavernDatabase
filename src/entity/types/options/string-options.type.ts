import { z } from 'zod';

import {
    OptionArray,
    Options,
} from './option.interface';


export const StringTraits = Options(
    OptionArray(z.string())
);
export type StringTraits = z.infer<typeof StringTraits>;
