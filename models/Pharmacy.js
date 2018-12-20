'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pharmacy = sequelize.define('Pharmacy', {
    name:{
      type:  DataTypes.STRING,
      validate:{
        notNull:true,
        notEmpty:true,
        msg: "must enter phramacy name"
      }
    },
    phoneNumber:{
      type: DataTypes.INTEGER,
      validate:{
        isNumeric:true
      }
    } ,
    address:{
      type: DataTypes.STRING , //may need to remover this as a seprate model something to think about
      validate:{

      }
    } ,
    fax: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric:{
          args: true,
          msg:"must enter an integer as phone number"
        }
      }
    }
  }, {});
  Pharmacy.associate = function(models) {
    // associations can be defined here
  };
  return Pharmacy;
};