'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pharmacies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
         type: Sequelize.INTEGER
      },
    
      name:{
        type:Sequelize.STRING,
        allowNull:false
      }
      ,
      phoneNumber:{
        type: Sequelize.INTEGER, 
      }
      ,
      fax:{
        type: Sequelize.INTEGER
      }
      ,
      address:{
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