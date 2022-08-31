import sequelize from "../db/mysql.js";
import { DataTypes } from "sequelize";


const Bulletin = sequelize.define(
    "bulletin",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
    });

export default Bulletin;