import EntityMapper from './interface/entity-mapper.interface';
import { Race } from '../../entity/race.entity';
import { DataSource, Repository } from 'typeorm';
import { Language } from '../../entity/language.entity';
import { Trait } from '../../entity/trait';
import { Proficiency } from '../../entity/proficiency.entity';

export default class RaceMapper extends EntityMapper<Race> {
    protected languageRepository: Repository<Language>;
    protected traitRepository: Repository<Trait>;
    protected proficienciesRepository: Repository<Proficiency>;

    constructor(entity: new () => Race, dataSource: DataSource) {
        super(entity, dataSource);

        this.languageRepository = dataSource.getRepository(Language);
        this.traitRepository = dataSource.getRepository(Trait);
        this.proficienciesRepository = dataSource.getRepository(Proficiency);
    }

    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            speed: obj.speed,
            ability_bonuses: obj.ability_bonuses.map((a: any) => {
                return {
                    ability_score: a.ability_score.index,
                    bonus: a.bonus,
                };
            }),
            size: obj.size,
            size_description: obj.size_description,
            starting_proficiencies: await this.mapProficiencies(
                obj.starting_proficiencies.map(p => p.index),
            ),
            starting_proficiency_options: obj.starting_proficiency_options
                ? {
                      choose: obj.starting_proficiency_options.choose,
                      from: obj.starting_proficiency_options.from.options.map(
                          p => p.item.index,
                      ),
                  }
                : null,
            languages: await this.mapLanguages(obj.languages.map(l => l.index)),
            language_desc: obj.language_desc,
            language_options: obj.language_options
                ? {
                      choose: obj.language_options.choose,
                      type: obj.language_options.type,
                      from: obj.language_options.from.options.map((l: any) => {
                          return l.item.index;
                      }),
                  }
                : null,
            traits: await this.mapTraits(obj.traits.map(t => t.index)),
        });
    }

    private async mapProficiencies(
        proficiencies: string[],
    ): Promise<Proficiency[]> {
        return await this.proficienciesRepository.findByIds(proficiencies);
    }

    private async mapLanguages(languages: string[]): Promise<Language[]> {
        return await this.languageRepository.findByIds(languages);
    }

    private async mapTraits(traits: string[]): Promise<Trait[]> {
        return await this.traitRepository.findByIds(traits);
    }
}
