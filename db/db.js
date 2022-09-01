import {Sequelize} from "sequelize";
import {sequelizeLogger} from "../utils/logger.js";

const sequelize = new Sequelize(
    "mysql://user:user123@localhost:3306/wombats_db",
    {
        logging: msg => sequelizeLogger.debug(msg)});

export default sequelize;