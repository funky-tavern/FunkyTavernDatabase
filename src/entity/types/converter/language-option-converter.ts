import { BaseConverter } from './converter';
import { LanguageOption } from '../options/language-option.interface';

import { Value } from '@sinclair/typebox/value';

export class CLanguageOptionConverter implements BaseConverter<LanguageOption> {
    to(value: any): LanguageOption {
        if (Value.Check(LanguageOption, value)) {
            return <LanguageOption>(<unknown>value);
        }

        if (!value?.from) {
            return null;
        }

        if (!value.from?.options) {
            value.from = {
                any: true
            };
            return <LanguageOption>value;
        }

        value.from = {
            options: value.from.options.map((option: any) => {
                if (typeof option === 'string') {
                    return option;
                }
                return option.item.index;
            })
        };
        return <LanguageOption>value;
    }

    from(value: LanguageOption): LanguageOption {
        return value;
    }
}

export const LanguageOptionConverter = new CLanguageOptionConverter();
