import { BaseConverter } from './converter';
import { ProficiencyChoices } from '../options/proficiency-choices';
import { Options } from '../options/option.interface';
import { Value } from '@sinclair/typebox/value';


const parseOptionReference = (value: any): ProficiencyChoices => {
    if (Value.Check(Options(ProficiencyChoices), value)) {
        return <ProficiencyChoices>(<unknown>value);
    }

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
    return value;
};


export class CProficiencyChoicesConverter implements BaseConverter<ProficiencyChoices> {
    to(value: any): ProficiencyChoices {
        if (!!value?.from) {
            return parseOptionReference(value);
        }

        return null;
    }

    from(value: ProficiencyChoices): any {
        return value;
    }
}

export const ProficiencyChoicesConverter = new CProficiencyChoicesConverter();