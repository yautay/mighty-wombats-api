import {DataTypes} from "sequelize";

function Bulletin(sequelize) {
    sequelize.define(
        "bulletin",
        {
            bulletin_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            bulletin_title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            bulletin_text: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            bulletin_date: {
                type: DataTypes.DATEONLY,
                defaultValue: DataTypes.NOW,
                allowNull: false,
            }
        })
}

export default Bulletin;
