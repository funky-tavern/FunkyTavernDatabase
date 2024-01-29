import {
    OptionChoice,
    OptionCountedReference,
    Options
} from './option.interface';

import { Type, type Static } from '@sinclair/typebox';

export const StartingEquipmentOptions = Options(
    Type.Union([OptionCountedReference, OptionChoice])
);
export type StartingEquipmentOptions = Static<typeof StartingEquipmentOptions>;
