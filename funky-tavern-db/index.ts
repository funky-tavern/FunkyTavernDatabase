import { AppDataSource } from "./data-source"
import {AbilityScore} from "./entity/ability-score.entity";
import { Mapper } from "./mapper/mapper";

AppDataSource.initialize().then(async () => {
    const mapper = new Mapper<AbilityScore>(AbilityScore);

    const abilityScoreRepository = AppDataSource.getRepository(AbilityScore);

    mapper.map("./funky-tavern-db/srd/ability-scores.json").then((data) => {
        data.forEach((abilityScore) => {
            abilityScoreRepository.save(abilityScore);
        });
    });

    abilityScoreRepository.find({
        where: {
            index: "str"
        }
    }).then((abilityScores) => {
        console.log(abilityScores);
    });
}).catch(error => console.log(error))
