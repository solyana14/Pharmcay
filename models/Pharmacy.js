'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pharmacy = sequelize.define('Pharmacy', {
    name: DataTypes.STRING,
    // expiryDate:DataTypes.Date
  }, {});
  Pharmacy.associate = function(models) {
    // associations can be defined here
  };
  return Pharmacy;
};