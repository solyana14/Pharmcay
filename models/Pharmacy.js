'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pharmacy = sequelize.define('Pharmacy', {
    name:{
      type:  DataTypes.STRING,
      allowNull:false,
      // validate:{
      //  allowNull:false,
      //   msg: "must enter phramacy name"
      // }
    },
    phoneNumber:{
      type: DataTypes.INTEGER,
      allowNull:false,
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