'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: {
      type: DataTypes.STRING,
      unique:true
    }
  }, {});
  Type.associate = function(models) {
    // associations can be defined here
    Type.hasMany(models.Medicine,{foreignKey: "TypeName", targetKey: 'name'})
  };
  return Type;
};