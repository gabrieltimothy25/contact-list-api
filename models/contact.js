'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Contact extends Model{}

  Contact.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    sequelize
  });
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};