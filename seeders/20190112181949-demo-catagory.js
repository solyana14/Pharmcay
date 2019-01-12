'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('Catagories',[
      {name:"Analgesics"},{name:"Antibacterials"},{name:"Anticonvulsants"},
      {name:"Anticonvulsants"},{name:"Antidementia agents"},{name:"Antidepressants"},
      {name:"Antidotes"},{name:"Antiemetics"},{name:"Antifungals"},
      {name:"Anti-inflammatory agents"},{name:"Antimigraine agents"},{name:"Antimyasthenic agents"},
      {name:"Antimycobacterials "},{name:"Antineoplastics"},{name:"Antiparasitics"},
      {name:"Antiparkinson agents"},{name:"Antipsychotics"},{name:"Antivirals"},
      {name:"Anxiolytic agents"},{name:"Bipolar agents"},{name:"Blood glucose regulators"},

      {name:"Blood products"},{name:"Antineoplastics"},{name:"Antiparasitics"},
      {name:"Antiparkinson agents"},{name:"Cardiovascular agents"},{name:"Central nervous system agents,"},
      {name:"Dental and oral agents"},{name:"Dermatological agents"},{name:"Enzyme replacement agent"},

      {name:"Gastrointestinal agents"},{name:"Genitourinary agents"},{name:"Hormonal agents"},
      {name:"Hormonal suppressant"},{name:"Immunological agents"},{name:"Inflammatory bowel disease agents"},
      {name:" Metabolic bone disease agents"},{name:"Ophthalmic agents"},{name:"Otic agents"},
      {name:"Respiratory tract agents"},{name:"Sedatives and hypnotics"},{name:"Therapeutic nutrients, minerals, and electrolytes"},
     
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
