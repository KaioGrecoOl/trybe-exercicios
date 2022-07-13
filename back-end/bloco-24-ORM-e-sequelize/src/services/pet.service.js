const {Pet, User} = require('../database/models/index')

const listAllPets = async () => {
    const pets = await Pet.findAll()
    return pets;
}

const listAllPetWithUsers = async () => {
  //incluir os dados de usuarios = eager loading
    const pets = await Pet.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['passwordHash'] } }],
    });
    
    return pets;
}

module.exports = {listAllPetWithUsers, listAllPets}