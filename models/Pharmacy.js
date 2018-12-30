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
      //this is a custom validation
      // validate: {
      //   wrongPostalCode(value) {
      //     if (this.country) {
      //       if (!validator.isPostalCode(String(this.postalCode), this.country)) {
      //         throw new Error('Wrong postal code');
      //       }
      //     }
      //   }
      // }
    },
   
    description: {
      type: DataTypes.STRING,
      // validate:{
        
      // }
    }
  }, {});
  Pharmacy.associate = function(models) {
    // associations can be defined here
  };
  return Pharmacy;
};