import { AppDataSource } from './data-source';
import { Mapper } from './mapper/mapper';
import { ENTITY_MAPPINGS, EntityMapping } from './mapper/mapping';

async function populateTable(mapping: EntityMapping): Promise<number> {
    const Repository = AppDataSource.getRepository(mapping.entity);

    const mapper = new Mapper(mapping.entity);

    let data = [];
    if (!!mapping.parents && mapping.parents.length > 0 && !!mapping.subpath) {
        for (let parentMapping of mapping.parents) {
            data = [
                ...data,
                ...(await mapper.mapFromParent(
                    mapping.subpath,
                    parentMapping.path,
                )),
            ];
        }
    } else if (!!mapping.path) {
        data = [...(await mapper.mapFromUrl(mapping.path))];
    } else {
        throw new Error('No path or parents provided');
    }

    return (await Repository.save(data)).length;
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
