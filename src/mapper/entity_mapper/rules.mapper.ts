import EntityMapper from './interface/entity-mapper.interface';
import { Rules } from '../../entity/rules.entity';
import { DataSource, Repository } from 'typeorm';
import { RuleSection } from '../../entity/rule-section.entity';

export default class RulesMapper extends EntityMapper<Rules> {
    protected subsectionRepository: Repository<RuleSection>;

    constructor(entity: new () => Rules, dataSource: DataSource) {
        super(entity, dataSource);

        this.subsectionRepository = dataSource.getRepository(RuleSection);
    }

    async map(obj: any): Promise<Rules> {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            desc: obj.desc,
            subsections: await this.mapSubsections(
                obj.subsections.map(s => s.index),
            ),
        });
    }

    private async mapSubsections(subsections: string[]) {
        return await this.subsectionRepository.findByIds(subsections);
    }
}
