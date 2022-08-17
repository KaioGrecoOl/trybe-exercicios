import { DATE, INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  email!: string;
  passwordHash!: string;
  name!: string;
  phone!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  passwordHash: {
    type: STRING,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  phone: {
    type: STRING,
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
  modelName: 'users',
  underscored: true,
});

export default User;
