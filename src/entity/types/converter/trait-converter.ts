import {
    TraitSpecific,
    TraitSpell,
    TraitWeapon,
    TraitSubOption,
} from '../options/trait-specific';

import { BaseConverter } from './converter';

import { Value } from '@sinclair/typebox/value';

const parseTraitSpell = (value: any): TraitSpell => {
    if (Value.Check(TraitSpell, value)) {
        return <TraitSpell>(<unknown>value);
    }

    value = value.spell_options;
    if (
        !value?.from ||
        !value.from?.options ||
        value.from.options.length === 0
    ) {
        return null;
    }

    value.from.options = value.from.options.map((option: any) => {
        if (typeof option === 'string') {
            return option;
        }
        return option.item.index;
    });

    return <TraitSpell>value;
};

const parseTraitSubOption = (value: any): TraitSubOption => {
    if (Value.Check(TraitSubOption, value)) {
        return <TraitSubOption>(<unknown>value);
    }

    value = value.subtrait_options;
    if (
        !value?.from ||
        !value.from?.options ||
        value.from.options.length === 0
    ) {
        return null;
    }

    value.from.options = value.from.options.map((option: any) => {
        if (typeof option === 'string') {
            return option;
        }
        return option.item.index;
    });

    return <TraitSubOption>value;
};

const parseTraitWeapon = (value: any): TraitWeapon => {
    if (Value.Check(TraitWeapon, value)) {
        return <TraitWeapon>(<unknown>value);
    }

    const weapon = Object.keys(<Object>value).filter(
        key => key !== 'damage_type',
    )[0];
    value = value[weapon];

    const obj = {};
    if (value.name) {
        obj['name'] = value.name;
    }
    if (value.desc) {
        obj['desc'] = value.desc;
    }
    if (value.dc) {
        obj['dc'] = {
            dc_type: value.dc.dc_type.index,
            dc_success: value.dc.dc_success,
        };
    }
    if (value.area_of_effect) {
        obj['area_of_effect'] = {
            type: value.area_of_effect.type,
            size: value.area_of_effect.size,
            size_unit: 'feet',
        };
    }
    if (value.usage) {
        obj['usage'] = {
            type: value.usage.type.replace(' ', '_'),
            rest_type: value.usage.rest_type ? value.usage.rest_type : 'long',
            times: value.usage.times,
        };
    }
    if (value.damage) {
        obj['damage'] = value.damage.map(damage => {
            return {
                damage_type: damage.damage_type.index,
                damage_at_character_level: damage.damage_at_character_level,
            };
        });
    }

    return <TraitWeapon>obj;
};

export class CTraitSpecificConverter implements BaseConverter<TraitSpecific> {
    to(value: any): TraitSpecific {
        if (!!value?.spell_options) {
            return parseTraitSpell(value);
        }
        if (!!value?.subtrait_options) {
            return parseTraitSubOption(value);
        }
        if (!!value?.damage_type) {
            return parseTraitWeapon(value);
        }
        return null;
    }

    from(value: TraitSpecific): TraitSpecific {
        return value;
    }
}

export const TraitSpecificConverter = new CTraitSpecificConverter();
