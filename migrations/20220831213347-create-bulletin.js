'use strict';
import  { DataTypes } from "sequelize";
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bulletin', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bulletin');
  }
};