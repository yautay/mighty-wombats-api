import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class bulletins extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    bulletin_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    bulletin_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bulletin_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bulletin_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'bulletins',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bulletin_id" },
        ]
      },
    ]
  });
  }
}
