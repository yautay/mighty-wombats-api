import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class squadron_greenie extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    squadron_greenie_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
    squadron_greenie_score_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      references: {
        model: 'greenie_score',
        key: 'greenie_score_id'
      }
    },
    squadron_greenie_points: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    squadron_greenie_night: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'squadron_greenie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "squadron_greenie_id" },
        ]
      },
      {
        name: "pilot_greenie",
        using: "BTREE",
        fields: [
          { name: "squadron_pilot_id" },
        ]
      },
      {
        name: "greenie_score",
        using: "BTREE",
        fields: [
          { name: "squadron_greenie_score_id" },
        ]
      },
    ]
  });
  }
}
