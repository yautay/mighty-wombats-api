import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class squadron_pilot_planes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    squadron_pilot_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'squadron_pilots',
        key: 'squadron_pilot_id'
      }
    },
    squadron_plane_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'squadron_planes',
        key: 'squadron_plane_id'
      }
    }
  }, {
    sequelize,
    tableName: 'squadron_pilot_planes',
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
        name: "pilot_planes",
        using: "BTREE",
        fields: [
          { name: "squadron_pilot_id" },
        ]
      },
      {
        name: "squadron_plane",
        using: "BTREE",
        fields: [
          { name: "squadron_plane_id" },
        ]
      },
    ]
  });
  }
}
