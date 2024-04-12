import { AppDataSource } from './data-source';
import { DataFetcher } from './mapper/dataFetcher';
import { ENTITY_MAPPINGS, EntityMapping, Mappings, ParentMapping } from './mapper/mapping';


async function getFromEntityMapping(mapping: EntityMapping): Promise<Object[]> {
    return DataFetcher.fromUrl(
        mapping.path,
        mapping.subresources?.map(subresource => subresource.path),
    );
}


async function getFromParentMapping(mapping: ParentMapping): Promise<Object[]> {
    let data = []
    for (let parentMapping of mapping.parents) {
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

    let entityMapper = new mapping.mapper(mapping.entity, AppDataSource);

    let data = [];
    if (!!(<EntityMapping>mapping).path) {
        data = await getFromEntityMapping(<EntityMapping>mapping);
    } else if (!!(<ParentMapping>mapping).parents) {
        data = await getFromParentMapping(<ParentMapping>mapping);
    } else {
        throw new Error('Invalid mapping');
    }

    let entities = await Promise.all(data.map(obj => entityMapper.map(obj)));

    return (await Repository.save(entities)).length;
}

AppDataSource.initialize()
    .then(async () => {
        for (const entityMapping of ENTITY_MAPPINGS) {
            try {
                let numberOfResources = await populateTable(entityMapping);
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
