import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class bulletin_graphics extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.SMALLINT,
          allowNull: false,
          primaryKey: true,
        },
        bulletin_id: {
          type: DataTypes.SMALLINT,
          allowNull: false,
          references: {
            model: "bulletins",
            key: "bulletin_id",
          },
        },
        graphic_uri_id: {
          type: DataTypes.SMALLINT,
          allowNull: false,
          references: {
            model: "graphics_uri",
            key: "graphic_uri_id",
          },
        },
      },
      {
        sequelize,
        tableName: "bulletin_graphics",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
          {
            name: "bulletin_graphic_uri",
            using: "BTREE",
            fields: [{ name: "bulletin_id" }],
          },
          {
            name: "graphic_uri",
            using: "BTREE",
            fields: [{ name: "graphic_uri_id" }],
          },
        ],
      }
    );
  }
}
