import { Model, STRING, INTEGER, DATE } from 'sequelize';
import db from '.';
import User from './user';

class Pet extends Model {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Pet.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  userId: {
    type: INTEGER,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'pets',
  underscored: true,
});

Pet.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Pet;
