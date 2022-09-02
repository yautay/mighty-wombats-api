import {Sequelize} from "sequelize";
import {sequelizeLogger} from "../utils/logger.js";
import modelDefiners from "../models/index.js";

const sequelize = new Sequelize(
    "mysql://user:user123@localhost:3306/wombats_db",
    {
        logging: msg => sequelizeLogger.debug(msg)});

for (const modelDefiner of modelDefiners) {
        modelDefiner(sequelize);
}

export default sequelize;