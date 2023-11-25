import { AppDataSource } from "./data-source"
import { Mapper } from "./mapper/mapper";
import { ENTITY_MAPPINGS } from "./mapper/mapping";

AppDataSource.initialize().then(async () => {


    ENTITY_MAPPINGS.forEach((entityMapping) => {
        const Repository = AppDataSource.getRepository(entityMapping.entity);

        (new Mapper(entityMapping.entity)).map(entityMapping.path).then((data) => {
            data
            Repository.save(data);
        });

        Repository.find().then((entities) => {
            console.log(entities);
        });
    });

}).catch(error => console.log(error))
