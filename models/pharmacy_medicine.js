'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pharmacy_Medicine = sequelize.define('Pharmacy_Medicine', {
    name: DataTypes.STRING
  }, {});
  Pharmacy_Medicine.associate = function(models) {
    // associations can be defined here
  };
  return Pharmacy_Medicine;
};