import { z } from 'zod';

import {
    OptionArray,
    OptionReference,
    Options,
} from './options/option.interface';
import { TAreaOfEffect } from './area-of-effect.type';
import { TDamage } from './damage.type';
import { DC } from './dc.type';
import { TUsage } from './usage.type';

export const TTraitWeapon = z.object({
    name: z.string(),
    desc: z.string(),
    dc: DC,
    area_of_effect: TAreaOfEffect,
    usage: TUsage,
    damage: z.array(TDamage),
});
export type TTraitWeapon = z.infer<typeof TTraitWeapon>;

export const TTraitSubOption = Options(OptionArray(OptionReference));
export type TTraitSubOption = z.infer<typeof TTraitSubOption>;

export const TTraitSpell = Options(OptionArray(OptionReference));
export type TTraitSpell = z.infer<typeof TTraitSpell>;

export const TTraitSpecific = z.union([
    TTraitWeapon,
    TTraitSubOption,
    TTraitSpell,
    z.null(),
]);
export type TTraitSpecific = z.infer<typeof TTraitSpecific>;
