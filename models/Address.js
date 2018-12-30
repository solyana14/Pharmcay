'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
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
      // bothCoordsOrNone() {
      //   if ((this.lattitude === null) !== (this.longitude === null)) {
      //     throw new Error('Require either both latitude and longitude or neither')
      //   }
      // }
    }
  });
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};