'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('attendances',
    [
      {
        'pet_id': 1,
        'vet_id': 2
      },
      {
        'pet_id': 3,
        'vet_id': 5
      },
      {
        'pet_id': 2,
        'vet_id': 1
      },
      {
        'pet_id': 6,
        'vet_id': 3
      },
      {
        'pet_id': 5,
        'vet_id': 4
      },
      {
        'pet_id': 4,
        'vet_id': 1
      },
      {
        'pet_id': 8,
        'vet_id': 5
      },
      {
        'pet_id': 7,
        'vet_id': 3
      },
      {
        'pet_id': 2,
        'vet_id': 2
      },
      {
        'pet_id': 3,
        'vet_id': 4
      },
    ], { });
  },
  
  async down (queryInterface) { queryInterface.bulkDelete('attendances', null, {}) }
};