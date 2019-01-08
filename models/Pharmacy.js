'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pharmacy = sequelize.define('Pharmacy', {
    // pharmacyId: {
    //   //type: DataTypes.UUID,
    //   primaryKey: true,
    //   type: DataTypes.INTEGER
    // //  defaultValue: DataTypes.UUIDV4
    // },
    username:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        len: { 
          args: [5, 42],
          msg: "The username length should be between 7 and 42 characters."
       }
      }
    },
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
    //make sure to hash this for later
    password:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        len: { 
          args: [7, 42],
          msg: "The password length should be between 7 and 42 characters."
       }
      }
    },
    description: {
      type: DataTypes.STRING,
      // validate:{
        
      // }
    }
  }, {});
  Pharmacy.associate = function(models) {
    // associations can be defined here
    Pharmacy.hasMany(models.Address)
  };
  return Pharmacy;
};