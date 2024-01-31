import { Options, OptionReference } from './option.interface';

import { AREA_OF_EFFECT, DAMAGE, DC, USAGE } from '../common';

import { Type, type Static } from '@sinclair/typebox';

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
