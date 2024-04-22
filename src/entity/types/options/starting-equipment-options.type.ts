import { z } from 'zod';

import {
    OptionArray,
    OptionChoice,
    OptionCountedReference,
    OptionEquipmentCategory,
    Options,
} from './option.interface';

export const StartingEquipmentOptions = Options(
    z.union([
        OptionArray(OptionCountedReference),
        OptionChoice(OptionEquipmentCategory),
    ]),
);
export type StartingEquipmentOptions = z.infer<typeof StartingEquipmentOptions>;
