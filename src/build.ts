import {AppDataSource} from "./data-source"
import { Mapper } from "./mapper/mapper";
import { ENTITY_MAPPINGS } from "./mapper/mapping";


async function populateTable(tableEntity, path): Promise<number> {
    const Repository = AppDataSource.getRepository(tableEntity);

    const data = await (new Mapper(tableEntity)).map(path)

    return (await Repository.save(data)).length;
}


AppDataSource.initialize().then(async () => {

    ENTITY_MAPPINGS.forEach((entityMapping) => {

        populateTable(entityMapping.entity, entityMapping.path).then((numberOfResources) => {
            console.log(`${entityMapping.entity.name}: ${numberOfResources} saved;`);
        }).catch((error) => {
            console.log(`${entityMapping.entity.name}: failed;`);
        });

    });

}).catch(error => console.log(error))
