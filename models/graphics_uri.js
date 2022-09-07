import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class graphics_uri extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    graphic_uri_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    graphic_uri: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'graphics_uri',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "graphic_uri_id" },
        ]
      },
    ]
  });
  }
}
