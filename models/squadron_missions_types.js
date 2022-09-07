import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class squadron_missions_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    missions_type_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    missions_type_value: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "missions_type_value"
    }
  }, {
    sequelize,
    tableName: 'squadron_missions_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "missions_type_id" },
        ]
      },
      {
        name: "missions_type_value",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "missions_type_value" },
        ]
      },
    ]
  });
  }
}
