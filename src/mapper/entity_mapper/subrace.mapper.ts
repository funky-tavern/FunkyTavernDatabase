import EntityMapper from './interface/entity-mapper.interface';
import { SubRace } from '../../entity/subrace.entity';
import { DataSource, Repository } from 'typeorm';
import { Race } from '../../entity/race.entity';
import { Language } from '../../entity/language.entity';
import { Trait } from '../../entity/trait';

export default class SubRaceMapper extends EntityMapper<SubRace> {
    protected raceRepository: Repository<Race>;
    protected languageRepository: Repository<Language>;
    protected traitRepository: Repository<Trait>;

    constructor(entity: new () => SubRace, dataSource: DataSource) {
        super(entity, dataSource);

        this.raceRepository = dataSource.getRepository(Race);
        this.languageRepository = dataSource.getRepository(Language);
        this.traitRepository = dataSource.getRepository(Trait);
    }

    async map(obj: any) {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            race: await this.mapRace(obj.race.index),
            desc: obj.desc,
            ability_bonuses: obj.ability_bonuses.map((ab: any) => {
                return {
                    ability_score: ab.ability_score.index,
                    bonus: ab.bonus,
                };
            }),
            starting_proficiencies: obj.starting_proficiencies.map(
                p => p.index,
            ),
            languages: await this.mapLanguages(obj.languages.map(l => l.index)),
            language_options: obj.language_options
                ? {
                      choose: obj.language_options.choose,
                      type: obj.language_options.type,
                      from: obj.language_options.from.options.map(
                          l => l.item.index,
                      ),
                  }
                : null,
            racial_traits: await this.mapTraits(
                obj.racial_traits.map(t => t.index),
            ),
        });
    }

    private async mapRace(race: string) {
        return this.raceRepository.findOne({
            where: {
                index: race,
            },
        });
    }

    private async mapLanguages(languages: string[]) {
        return this.languageRepository.findByIds(languages);
    }

    private async mapTraits(traits: string[]) {
        return this.traitRepository.findByIds(traits);
    }
}
