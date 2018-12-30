'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pharmacies', {
      pharmacyId: {
        allowNull: false,
        // autoIncrement: true,
        primaryKey: true,
         type: Sequelize.UUID
      },
    
      name:{
        type:Sequelize.STRING,
        allowNull:false
      }
      ,
      description:{
        type: Sequelize.STRING
      }
      ,
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
    return queryInterface.dropTable('Pharmacies');
  }
};