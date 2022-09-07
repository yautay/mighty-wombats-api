import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pilot_mission_flight_roles extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    pilot_mission_flight_role_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    pilot_mission_flight_role_value: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pilot_mission_flight_roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pilot_mission_flight_role_id" },
        ]
      },
    ]
  });
  }
}
