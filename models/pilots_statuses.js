import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pilots_statuses extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    status_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    status_value: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "status_value"
    }
  }, {
    sequelize,
    tableName: 'pilots_statuses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "status_value",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_value" },
        ]
      },
    ]
  });
  }
}
