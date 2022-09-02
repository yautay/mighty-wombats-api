import {DataTypes} from "sequelize";

function Greenie(sequelize) {
    sequelize.define(
        "greenie",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            score: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            points: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
            night: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            pilot: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        })
}

export default Bulletin;
