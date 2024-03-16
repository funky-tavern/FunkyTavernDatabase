import { AppDataSource } from './data-source';
import { DataFetcher } from './mapper/dataFetcher';
import { ENTITY_MAPPINGS, EntityMapping } from './mapper/mapping';

async function populateTable(mapping: EntityMapping): Promise<number> {
    const Repository = AppDataSource.getRepository(mapping.entity);

    let entityMapper = new mapping.mapper(Repository);

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

    return (await Repository.save(
        data.map((entity: any) => entityMapper.map(entity))
    )).length;
}

AppDataSource.initialize()
    .then(async () => {
        ENTITY_MAPPINGS.forEach(entityMapping => {
            populateTable(entityMapping)
                .then(numberOfResources => {
                    console.log(
                        `${entityMapping.entity.name}: ${numberOfResources} saved;`,
                    );
                })
                .catch(error => {
                    console.debug(error);
                    console.log(`${entityMapping.entity.name}: failed;`);
                });
        });
    })
    .catch(error => console.log(error));
