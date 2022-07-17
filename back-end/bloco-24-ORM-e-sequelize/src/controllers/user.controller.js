const userService = require('../services/user.service')

const getAllUsers = async (req, res) => {
    const result = await userService.getAllUsers()
    return res.status(200).json(result)
}

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body)
  return res.status(200).json(result)
}

const createUserComPet = async (req, res) => {
  const result = await userService.createUserComPet(req.body)
  return res.status(200).json(result)
}

module.exports = {getAllUsers, createUserComPet, createUser}