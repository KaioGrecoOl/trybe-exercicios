const createAttendanceModel = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    petId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    vetId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    underscored: true,
    tableName: 'attendances',
    timestamps: false
  });

  Attendance.associate = (models) => {
    Attendance.belongsTo(models.Pet, {
      foreignKey: 'petId',
      as: 'pet'
    });

    Attendance.belongsTo(models.Vet, {
      foreignKey: 'vetId',
      as: 'vet'
    });
  }

  return Attendance;
};

module.exports = createAttendanceModel;