import { Options, OptionReference } from './options/option.interface';

import { AREA_OF_EFFECT } from './area-of-effect.type';

import { Type, type Static } from '@sinclair/typebox';
import { DAMAGE } from './damage.type';
import { DC } from './dc.type';
import { USAGE } from './usage.type';

export const TraitWeapon = Type.Object({
    name: Type.String(),
    desc: Type.String(),
    dc: DC,
    area_of_effect: AREA_OF_EFFECT,
    usage: USAGE,
    damage: Type.Array(DAMAGE),
});
export type TraitWeapon = Static<typeof TraitWeapon>;

export const TraitSubOption = Options(OptionReference);
export type TraitSubOption = Static<typeof TraitSubOption>;

export const TraitSpell = Options(OptionReference);
export type TraitSpell = Static<typeof TraitSpell>;

export const TraitSpecific = Type.Union([
    TraitWeapon,
    TraitSubOption,
    TraitSpell,
    Type.Null(),
]);
export type TraitSpecific = Static<typeof TraitSpecific>;
