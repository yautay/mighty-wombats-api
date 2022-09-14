import {Sequelize} from "sequelize";
import {sequelizeLogger} from "../utils/logger.js";
import initModels from "../models/init-models.js";
import * as dotenv from 'dotenv';
dotenv.config();

if (process.env.NODE_ENV === "docker") {
        const db_uri = process.env.DB_URL_DOCKER
} else if (process.env.NODE_ENV === "development") {
        const db_uri = process.env.DB_URL_LOCAL
} else {
        const db_uri = process.env.DB_URL_PRODUCTION
}

const sequelize = new Sequelize(
    db_uri,
    {
        logging: msg => sequelizeLogger.debug(msg)});

const models = initModels(sequelize)

export default sequelize;