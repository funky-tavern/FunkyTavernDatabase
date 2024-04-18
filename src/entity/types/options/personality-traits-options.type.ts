import { z } from 'zod';

import {
    OptionArray,
    Options,
} from './option.interface';


export const PersonalityTraits = Options(
    OptionArray(z.string())
);
export type PersonalityTraits = z.infer<typeof PersonalityTraits>;
