'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Medicines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      // price:{
      //   type: Sequelize.FLOAT
      // },
      quantity:{
        type: Sequelize.INTEGER
      }
      ,
      dosage:{
        type:Sequelize.FLOAT,
      //   value:[
      //     "%",
      //     "AU",
      //     "AU/mL",
      //     "bar",
      //     "BAU",
      //     "BAU/mL",
      //     "bead",
      //     "BU",
      //     "capsule",
      //     "CCID_50",
      //     "cellular sheet",
      //     "Ci",
      //     "cloth",
      //     "cm^2",
      //     "D'ag'U",
      //     "disc",
      //     "dL",
      //     "douche",
      //     "drop",
      //     "FFU",
      //     "g",
      //     "globule",
      //     "granule",
      //     "gum",
      //     "hp_C",
      //     "hp_M",
      //     "hp_Q",
      //     "hp_X",
      //     "IU",
      //     "IU/L",
      //     "IU/mL",
      //     "kp_C",
      //     "L",
      //     "Lf",
      //     "LfU/mL",
      //     "lozenge",
      //     "mCi",
      //     "mCi/mL",
      //     "mEq",
      //     "mg",
      //     "mg/actuat",
      //     "mg/hr",
      //     "mg/mg",
      //     "mg/mL",
      //     "mL",
      //     "mmol",
      //     "mol",
      //     "mU",
      //     "ng",
      //     "nmol",
      //     "organisms",
      //     "pastille",
      //     "patch",
      //     "pellet",
      //     "PFU",
      //     "pill",
      //     "PNU",
      //     "PNU/mL",
      //     "pouch",
      //     "puff",
      //     "ring",
      //     "salve",
      //     "stick",
      //     "strip",
      //     "suppository",
      //     "swab",
      //     "tablet",
      //     "tampon",
      //     "tape",
      //     "tbsp",
      //     "TCID_50",
      //     "tsp",
      //     "U",
      //     "uCi",
      //     "ug",
      //     "ug/mL",
      //     "uL",
      //     "umol",
      //     "unt",
      //     "unt/mL",
      //     "USP'U",
      //     "vial",
      //     "wafer",
      //     "X"
      // ]
      },
      CatagoryName:{
        type:Sequelize.STRING
      },
      TypeName:{
        type:Sequelize.STRING
      },
      ManufacturerId:{
        type:Sequelize.INTEGER

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
    return queryInterface.dropTable('Medicines');
  }
};