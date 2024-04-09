import {
    OptionArray,
    OptionChoice,
    OptionCountedReference,
    OptionEquipmentCategory,
    Options,
} from './option.interface';

import { Type, type Static } from '@sinclair/typebox';

export const StartingEquipmentOptions = Options(
    Type.Union([
        OptionArray(OptionCountedReference),
        OptionChoice(OptionEquipmentCategory),
    ]),
);
export type StartingEquipmentOptions = Static<typeof StartingEquipmentOptions>;
