const uuid = require('uuid/v4')
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      addrId: {
        allowNull: false,
       // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUID,
       // defaultValue: uuid()
      },
      city: {
        type: Sequelize.STRING
      },
      lattitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses');
  }
};