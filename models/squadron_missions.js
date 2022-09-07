import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class squadron_missions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    squadron_mission_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    squadron_mission_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    squadron_mission_time: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    squadron_mission_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    squadron_mission_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'squadron_missions_types',
        key: 'missions_type_id'
      }
    },
    squadron_mission_details: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'squadron_missions_details',
        key: 'missions_detail_id'
      }
    }
  }, {
    sequelize,
    tableName: 'squadron_missions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "squadron_mission_id" },
        ]
      },
      {
        name: "mission_type",
        using: "BTREE",
        fields: [
          { name: "squadron_mission_type" },
        ]
      },
      {
        name: "mission_details",
        using: "BTREE",
        fields: [
          { name: "squadron_mission_details" },
        ]
      },
    ]
  });
  }
}
