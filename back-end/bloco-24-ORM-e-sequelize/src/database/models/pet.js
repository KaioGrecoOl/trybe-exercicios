'use strict';
const createPetModel = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    underscored: true,
    tableName: 'pets',
  });

  Pet.associate = (models) => {
    Pet.belongsTo(models.User, {as: 'user', foreignKey: 'userId'})
  }

  return Pet
};

module.exports = createPetModel;
