import { BaseConverter } from './converter';
import { LanguageOption } from '../options/language-option.interface';

import { Value } from '@sinclair/typebox/value';

export class CLanguageOptionConverter implements BaseConverter<LanguageOption> {
    to(value: any): LanguageOption {
        if (Value.Check(LanguageOption, value)) {
            return <LanguageOption>(<unknown>value);
        }

        if (
            !value?.from ||
            !value.from?.options ||
            value.from.options.length === 0
        ) {
            return null;
        }

        value.from.options = value.from.options.map((option: any) => {
            return option.item.index;
        });

        return <LanguageOption>value;
    }

    from(value: LanguageOption): LanguageOption {
        return value;
    }
}

export const LanguageOptionConverter = new CLanguageOptionConverter();
