const {User, Pet} = require('../database/models/index')
const Sequelize = require('sequelize');
const config = require('../database/config/config');
const sequelize = new Sequelize(config.development);
const Joi = require('joi');
const passwordHashing = require('../services/password.services');

const validateBody = (data) => {
  const schema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
  phone: Joi.string().required(),
})

const { error, value } = schema.validate(data);

if (error) throw error;

return value;
}

const getAllUsers = async () => {
  const result = await User.findAll();
  return result;
};

const createUser = async ({email, password, confirmPassword, name, phone}) => {
  const validate = validateBody({email, password, confirmPassword, name, phone})
  const passwordEncrypted = passwordHashing.encryptPassword(password)
  const result = await User.create(
      {email, password_hash: passwordEncrypted, name, phone}
  )
  return result;
}

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

module.exports = {getAllUsers, createUserComPet, createUser}
