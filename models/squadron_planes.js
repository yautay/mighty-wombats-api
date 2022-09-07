import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class squadron_planes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    squadron_plane_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    squadron_plane_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'plane_types',
        key: 'plane_type_id'
      }
    },
    squadron_plane_modex: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    squadron_plane_hours: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    squadron_plane_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'plane_statuses',
        key: 'plane_status_id'
      }
    }
  }, {
    sequelize,
    tableName: 'squadron_planes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "squadron_plane_id" },
        ]
      },
      {
        name: "plane_status",
        using: "BTREE",
        fields: [
          { name: "squadron_plane_status" },
        ]
      },
      {
        name: "plane_type",
        using: "BTREE",
        fields: [
          { name: "squadron_plane_type" },
        ]
      },
    ]
  });
  }
}
