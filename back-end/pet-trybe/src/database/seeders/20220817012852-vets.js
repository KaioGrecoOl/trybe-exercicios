'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {    
    await queryInterface.bulkInsert('vets',
    [
      {
        name: 'Michael Scott',
      },
      {
        name: 'Jim Halpert',
      },
      {
        name: 'Pam Beesly',
      },
      {
        name: 'Dwight Schrute',
      },
      {
        name: 'Andy Bernard',
      },
    ])
  },

  async down (queryInterface, Sequelize) { queryInterface.bulkDelete('vets', null, {}) }
};