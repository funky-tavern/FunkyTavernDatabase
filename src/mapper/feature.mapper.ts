import EntityMapper from './entity_mapper/interface/entity-mapper.interface';
import { Feature } from '../entity/feature.entity';


export default class FeatureMapper extends EntityMapper<Feature> {
    map(obj: any): Feature {
        return this.entityRepository.create({
            index: obj.index,
            name: obj.name,
            class: obj.class.index,
            subclass: obj.subclass?.index,
            level: obj.level,
            prerequisites: obj.prerequisites.map((prereq: any) => {
                switch (prereq.type) {
                    case 'level':
                        return { type: prereq.type, level: prereq.level };
                    case 'spell':
                        let spell_index = prereq.spell.split('/').pop();
                        return { type: prereq.type, spell: spell_index };
                    case 'feature':
                        let feature_index = prereq.feature.split('/').pop();
                        return { type: prereq.type, feature: feature_index };
                }
            }),
            desc: obj.desc.join('\n'),
        });
    }
}
