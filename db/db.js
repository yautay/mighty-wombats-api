import {Sequelize} from "sequelize";
import {sequelizeLogger} from "../utils/logger.js";
import initModels from "../models/init-models.js";
import * as dotenv from 'dotenv';
dotenv.config();

let db_uri = undefined;
if (process.env.NODE_ENV === "docker") {
        db_uri = process.env.DB_URL_DOCKER
} else if (process.env.DEVELOP) {
        db_uri = process.env.DB_URL_LOCAL
} else {
        db_uri = process.env.DB_URL_PRODUCTION
}
console.log(db_uri);
const sequelize = new Sequelize(db_uri,
    {
        logging: msg => sequelizeLogger.debug(msg)});

const models = initModels(sequelize)

export default sequelize;