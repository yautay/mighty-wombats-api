import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pilot_mission_options_types extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pilot_mission_options_type_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    pilot_mission_options_type_value: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "pilot_mission_options_type_value"
    },
    is_training: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pilot_mission_options_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pilot_mission_options_type_id" },
        ]
      },
      {
        name: "pilot_mission_options_type_value",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pilot_mission_options_type_value" },
        ]
      },
    ]
  });
  }
}
