import { BaseConverter } from './converter';
import { LanguageOption } from '../options/language_option.interface';

import { Value } from '@sinclair/typebox/value';

class LanguageOptionConverter implements BaseConverter<LanguageOption> {
    to = (value: any): LanguageOption => {
        if (Value.Check(LanguageOption, value)) {
            return value;
        }

        return LanguageOption[value];
    };

    from = (value: LanguageOption): LanguageOption => {
        return value;
    };
}
