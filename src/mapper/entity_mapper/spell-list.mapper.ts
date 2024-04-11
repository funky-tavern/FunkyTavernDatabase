import EntityMapper from './interface/entity-mapper.interface';
import { DataSource, Repository } from 'typeorm';
import { SpellList } from '../../entity/spell-list.entity';
import { Spell } from '../../entity/spell.entity';

export default class SpellListMapper extends EntityMapper<SpellList> {
    protected spellRepository: Repository<Spell>;

    constructor(entity: new () => SpellList, dataSource: DataSource) {
        super(entity, dataSource);

        this.spellRepository = dataSource.getRepository(Spell);
    }

    async map(obj: any): Promise<SpellList> {
        return this.entityRepository.create({
            index: obj.index,
            spells: await this.mapSpells(
                obj.results.map(s => s.index),
            ),
        });
    }

    private async mapSpells(spells: string[]) {
        return await this.spellRepository.findByIds(spells);
    }
}
