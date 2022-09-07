import {Sequelize} from "sequelize";
import {sequelizeLogger} from "../utils/logger.js";
import initModels from "../models/init-models.js";


const sequelize = new Sequelize(
    "mysql://user:user123@localhost:3306/wombats_db",
    {
        logging: msg => sequelizeLogger.debug(msg)});

const models = initModels(sequelize)

export default sequelize;