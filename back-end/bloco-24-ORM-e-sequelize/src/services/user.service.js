const {User, Pet} = require('../database/models/index')
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const sequelize = new Sequelize(config.development);


const getAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

const createUserComPet = async ({email, password_hash, name, phone, namepet }) => {
  const t = await sequelize.transaction();

  try {

      const user = await User.create(
      { email, name, phone, password_hash },
      { transaction: t },
      );

      await Pet.create(
      { userId: user.id, name: namepet  },
      { transaction: t },
      );

      await t.commit();

      return true
  } catch (e) {
      await t.rollback();
      console.log(e.message);
      return e
  }
}

module.exports = {getAllUsers, createUserComPet}
