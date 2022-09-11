import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pilot_mission_options extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    pilot_mission_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'pilot_missions',
        key: 'id'
      }
    },
    pilot_mission_option_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'pilot_mission_options_types',
        key: 'pilot_mission_options_type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'pilot_mission_options',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mission_options",
        using: "BTREE",
        fields: [
          { name: "pilot_mission_id" },
        ]
      },
      {
        name: "option_type",
        using: "BTREE",
        fields: [
          { name: "pilot_mission_option_id" },
        ]
      },
    ]
  });
  }
}
