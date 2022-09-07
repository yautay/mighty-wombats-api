import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class squadron_pilots extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    squadron_pilot_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    squadron_pilot_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    squadron_pilot_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'pilots_statuses',
        key: 'status_id'
      }
    },
    squadron_pilot_avatar: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    squadron_pilot_story: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'squadron_pilots',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "squadron_pilot_id" },
        ]
      },
      {
        name: "pilot_status",
        using: "BTREE",
        fields: [
          { name: "squadron_pilot_status" },
        ]
      },
    ]
  });
  }
}
