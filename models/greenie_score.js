import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class greenie_score extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    greenie_score_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    greenie_score_option: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "greenie_score_option"
    },
    greenie_score_value: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    greenie_score_points: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'greenie_score',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "greenie_score_id" },
        ]
      },
      {
        name: "greenie_score_option",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "greenie_score_option" },
        ]
      },
    ]
  });
  }
}
