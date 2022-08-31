import {Sequelize} from "sequelize";

const sequelize = new Sequelize("mysql://user:user123@localhost:3306/wombats_db", {logging: true});

export default sequelize;