import Pet from './database/models/pet';
import User from './database/models/user';

(async () => {
  const pet = await Pet.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password_hash'] } },
    ],
  });
  console.log(pet);
  process.exit(0);
})();
