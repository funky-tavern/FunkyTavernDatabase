import "reflect-metadata"
import { DataSource } from "typeorm"
import {ENTITIES} from "./mapper/mapping";


export const DATABASE_FILE_PATH = "funky-tavern-db/db/funky-tavern.database"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: DATABASE_FILE_PATH,
    synchronize: true,
    logging: false,
    entities: ENTITIES,
    migrations: [],
    subscribers: [],
})
