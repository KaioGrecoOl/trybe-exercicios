import { Model, STRING, INTEGER, DATE } from 'sequelize';
import db from '.';

class Vet extends Model {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Vet.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
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
  modelName: 'vets',
  underscored: true,
});

export default Vet;
