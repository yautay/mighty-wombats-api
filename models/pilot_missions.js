import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pilot_missions extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    squadron_mission_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'squadron_missions',
        key: 'squadron_mission_id'
      }
    },
    squadron_pilot_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'squadron_pilots',
        key: 'squadron_pilot_id'
      }
    },
    pilot_mission_squadron_plane_id: {
      type: DataTypes.TINYINT,
      allowNull: true,
      references: {
        model: 'squadron_planes',
        key: 'squadron_plane_id'
      }
    },
    pilot_mission_flight_role: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'pilot_mission_flight_roles',
        key: 'pilot_mission_flight_role_id'
      }
    },
    pilot_mission_flight_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'pilot_mission_flight_types',
        key: 'pilot_mission_flight_type_id'
      }
    },
    pilot_mission_kill_aa_pvp: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    pilot_mission_kill_aa_ai: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    pilot_mission_kill_ag: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    pilot_mission_kill_sead: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    pilot_mission_kill_ship: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    pilot_mission_kill_ff: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    pilot_mission_time: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    pilot_mission_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'pilot_mission_statuses',
        key: 'pilot_mission_status_id'
      }
    }
  }, {
    sequelize,
    tableName: 'pilot_missions',
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
        name: "pilot_missions",
        using: "BTREE",
        fields: [
          { name: "squadron_pilot_id" },
        ]
      },
      {
        name: "mission_roles",
        using: "BTREE",
        fields: [
          { name: "pilot_mission_flight_role" },
        ]
      },
      {
        name: "mission_types",
        using: "BTREE",
        fields: [
          { name: "pilot_mission_flight_type" },
        ]
      },
      {
        name: "mission_status",
        using: "BTREE",
        fields: [
          { name: "pilot_mission_status" },
        ]
      },
      {
        name: "squadron_mission",
        using: "BTREE",
        fields: [
          { name: "squadron_mission_id" },
        ]
      },
      {
        name: "squadron_planes",
        using: "BTREE",
        fields: [
          { name: "pilot_mission_squadron_plane_id" },
        ]
      },
    ]
  });
  }
}
