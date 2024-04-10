import { AppDataSource } from './data-source';
import { DataFetcher } from './mapper/dataFetcher';
import { ENTITY_MAPPINGS, EntityMapping } from './mapper/mapping';

async function populateTable(mapping: EntityMapping): Promise<number> {
    const Repository = AppDataSource.getRepository(mapping.entity);

    let entityMapper = new mapping.mapper(mapping.entity, AppDataSource);

    let data = [];
    if (!!mapping.parents && mapping.parents.length > 0 && !!mapping.subpath) {
        for (let parentMapping of mapping.parents) {
            data = [
                ...data,
                ...(await DataFetcher.fromParentUrl(
                    mapping.subpath,
                    parentMapping.path,
                )),
            ];
        }
    } else if (!!mapping.path) {
        data = [...(await DataFetcher.fromUrl(mapping.path))];
    } else {
        throw new Error('No path or parents provided');
    }

    let entities = await Promise.all(data.map(obj => entityMapper.map(obj)));

    return (
        await Repository.save(entities)
    ).length;
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
