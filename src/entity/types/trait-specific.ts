import { z } from 'zod';

import { Options, OptionReference, OptionArray } from './options/option.interface';
import { AREA_OF_EFFECT } from './area-of-effect.type';
import { DAMAGE } from './damage.type';
import { DC } from './dc.type';
import { USAGE } from './usage.type';


export const TraitWeapon = z.object({
    name: z.string(),
    desc: z.string(),
    dc: DC,
    area_of_effect: AREA_OF_EFFECT,
    usage: USAGE,
    damage: z.array(DAMAGE),
});
export type TraitWeapon = z.infer<typeof TraitWeapon>;


export const TraitSubOption = Options(OptionArray(OptionReference));
export type TraitSubOption = z.infer<typeof TraitSubOption>;


export const TraitSpell = Options(OptionArray(OptionReference));
export type TraitSpell = z.infer<typeof TraitSpell>;


export const TraitSpecific = z.union([
    TraitWeapon,
    TraitSubOption,
    TraitSpell,
    z.null(),
]);
export type TraitSpecific = z.infer<typeof TraitSpecific>;