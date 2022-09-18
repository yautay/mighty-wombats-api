import {Sequelize} from "sequelize";
import {sequelizeLogger} from "../utils/logger.js";
import initModels from "../models/init-models.js";
import * as dotenv from 'dotenv';
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_USER_PASS = process.env.DB_USER_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const db_uri = `mysql://${DB_USER}:${DB_USER_PASS}@${DB_HOST}/${DB_NAME}`

console.log(db_uri)
const sequelize = new Sequelize(db_uri,
    {
            logging: msg => sequelizeLogger.debug(msg)});

const models = initModels(sequelize)

export default sequelize;