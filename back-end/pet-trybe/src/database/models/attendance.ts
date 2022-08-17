import { Model, INTEGER } from 'sequelize';
import db from '.';

class Attendance extends Model {
  petId!: number;
  vetId!: number;
}

Attendance.init({
  petId: {
    type: INTEGER,
    primaryKey: true,
  },
  vetId: {
    type: INTEGER,
    primaryKey: true,
  },
}, {
  sequelize: db,
  modelName: 'attendances',
  underscored: true,
  timestamps: false,
});

export default Attendance;
