'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Types',[
     {name: "Preparations"},{name:"Liquid"},{name:"Tablet"},
     {name: "Caplsul"},{name:"Drops"},{name:"Inhalers"},
     {name: "Injection"},{name:"Implant"},{name:"Ointment"},
     {name: "Suppository"},{name:"Buccal"}
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
