import {
    OptionChoice,
    OptionCountedReference,
    Options,
} from './option.interface';

import { Type, type Static } from '@sinclair/typebox';

export const StartingEquipmentOptions = Options([
    OptionCountedReference,
    OptionChoice,
]);
export type StartingEquipmentOptions = Static<typeof StartingEquipmentOptions>;
