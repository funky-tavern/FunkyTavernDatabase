import { AppDataSource } from './data-source';
import { DataFetcher } from './mapper/dataFetcher';
import {
    ENTITY_MAPPINGS,
    EntityMapping,
    Mappings,
    ParentMapping,
} from './mapper/mapping';
import { ObjectLiteral } from 'typeorm';

async function getFromEntityMapping(
    mapping: EntityMapping,
): Promise<ObjectLiteral[]> {
    return DataFetcher.fromUrl(
        mapping.path,
        mapping.subresources?.map(subresource => subresource.path),
    );
}

async function getFromParentMapping(
    mapping: ParentMapping,
): Promise<ObjectLiteral[]> {
    let data = [];
    for (const parentMapping of mapping.parents) {
        data = [
            ...data,
            ...(await DataFetcher.fromParentUrl(
                mapping.subpath,
                parentMapping.path,
            )),
        ];
    }

    return data;
}

async function populateTable(mapping: Mappings): Promise<number> {
    const Repository = AppDataSource.getRepository(mapping.entity);

    const entityMapper = new mapping.mapper(mapping.entity, AppDataSource);

    let data = [];
    if ((<EntityMapping>mapping).path) {
        data = await getFromEntityMapping(<EntityMapping>mapping);
    } else if ((<ParentMapping>mapping).parents) {
        data = await getFromParentMapping(<ParentMapping>mapping);
    } else {
        throw new Error('Invalid mapping');
    }

    const entities = await Promise.all(data.map(obj => entityMapper.map(obj)));

    return (await Repository.save(entities)).length;
}

AppDataSource.initialize()
    .then(async () => {
        for (const entityMapping of ENTITY_MAPPINGS) {
            try {
                const numberOfResources = await populateTable(entityMapping);
                console.log(
                    `${entityMapping.entity.name}: ${numberOfResources} saved;`,
                );
            } catch (error) {
                console.debug(error);
                console.log(`${entityMapping.entity.name}: failed;`);
            }
        }
    })
    .catch(error => console.log(error));
