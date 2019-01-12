'use strict';
module.exports = (sequelize, DataTypes) => {
  const Catagory = sequelize.define('Catagory', {
    name: {
     type: DataTypes.STRING,
     unique:true
    }
  }, {});
  Catagory.associate = function(models) {
    // associations can be defined here
    Catagory.hasMany(models.Medicine)
  };
  return Catagory;
};