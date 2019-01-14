'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define('Manufacturer', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Manufacturer.associate = function(models) {
    // associations can be defined here
    Manufacturer.hasMany(models.Medicine,{ foreignKey: "ManufacturerName",targetKey:'name'})
  };
  return Manufacturer;
};