import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class plane_statuses extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    plane_status_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    plane_status_value: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "plane_status_value"
    }
  }, {
    sequelize,
    tableName: 'plane_statuses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plane_status_id" },
        ]
      },
      {
        name: "plane_status_value",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "plane_status_value" },
        ]
      },
    ]
  });
  }
}
