import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class squadron_missions_details extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    missions_detail_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    missions_detail_value: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "missions_detail_value"
    }
  }, {
    sequelize,
    tableName: 'squadron_missions_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "missions_detail_id" },
        ]
      },
      {
        name: "missions_detail_value",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "missions_detail_value" },
        ]
      },
    ]
  });
  }
}
