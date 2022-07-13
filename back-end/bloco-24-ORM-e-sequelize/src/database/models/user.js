'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'users'
  })
  return User;
};

module.exports = createUserModel
