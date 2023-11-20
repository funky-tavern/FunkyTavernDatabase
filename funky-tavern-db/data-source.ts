import "reflect-metadata"
import { DataSource } from "typeorm"
import {ENTITIES} from "./mapper/mapping";


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: ENTITIES,
    migrations: [],
    subscribers: [],
})
