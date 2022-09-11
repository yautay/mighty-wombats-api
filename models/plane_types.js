import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class plane_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    plane_type_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    plane_type_value: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "plane_type_value"
    }
  }, {
    sequelize,
    tableName: 'plane_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plane_type_id" },
        ]
      },
      {
        name: "plane_type_value",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plane_type_value" },
        ]
      },
    ]
  });
  }
}
