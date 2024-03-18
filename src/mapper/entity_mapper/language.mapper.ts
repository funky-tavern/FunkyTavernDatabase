import EntityMapper from './entity-mapper.interface';
import { Language } from '../../entity/language.entity';

export default class LanguageMapper extends EntityMapper<Language> {
    map(obj: any): Language {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc,
            type: obj.type,
        });
    }
}
