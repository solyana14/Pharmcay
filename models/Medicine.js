'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define('Medicine', {
    name: DataTypes.STRING,
    price:{
      type: DataTypes.FLOAT,
      validate:{
        min:{
          args:[0.0],
          msg: "price can't be less than 0"
        }
      }
    },
    quantity:{
      type: DataTypes.INTEGER,
      validate:{
        min:{
          args:[0],
          msg: "quantity can't be less than 0"
        }
      }
    },
    dosage:{
      type:DataTypes.INTEGER,
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
    }
  }, {});
  Medicine.associate = function(models) {
    // associations can be defined here
    Medicine.belongsTo(models.Catagory)
    Medicine.belongsTo(models.Type)
    Medicine.belongsTo(models.Manufacturer)
  };
  return Medicine;
};