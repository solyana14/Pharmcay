'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    // addrId: {
    //  // type: DataTypes.UUID,
    //   primaryKey: true,
    //   type: DataTypes.INTEGER
    //  // defaultValue: DataTypes.UUIDV4
    // },
    city: DataTypes.STRING,
    lattitude: {
      type: DataTypes.FLOAT,
      validate:{
        min:{
          args:[-180.0],
          msg:"lattitude can't be less than -180"
        } ,
        max:{
          args:[180.0],
          msg:"lattitude can't be more than 180"
        },
        bothOrNone(){
          if(!this.longitude){
            throw new Error ('require both latitude and longitude')
          }
        }
      }
    },
    longitude: {
      type: DataTypes.FLOAT,
      validate:{
        min:{
          args:[-180.0],
          msg:"longitude can't be less than -180"
        } ,
        max:{
          args:[180.0],
          msg:"longitude can't be more than 180"
        },
        bothOrNone(){
          if(!this.lattitude){
            throw new Error ('require both lattitude and longitude')
          }
        }
      }
    }

  }, {
    validate:{
    
    }
  });
  // Address.beforeCreate((addr,_)=>{
  //   return addr.id =uuid()
  // })
  Address.associate = function(models) {
    // associations can be defined here
    Address.belongsTo(models.Pharmacy, { foreignKey: "PharmacyId"})
  };
 
  return Address;
};