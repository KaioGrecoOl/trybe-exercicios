const petsService = require('../services/pet.service');

//http://localhost:6000/pets/users?include=true
const listAllPets = async (req, res) => {
    //eager
    if (req.query.include === 'true') {
        const pets = await petsService.listAllPetWithUsers()
        return res.status(200).json(pets);
    }
    //lazy
    res.status(200).json(await petsService.listAllPets());
}

module.exports = { listAllPets}