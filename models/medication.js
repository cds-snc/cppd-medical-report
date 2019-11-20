'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medication = sequelize.define('Medication', {
    medication_info: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    response: DataTypes.STRING,
  }, {});
  Medication.associate = function(models) {
    Medication.belongsToMany(models.MedicalCondition, {
      through: 'MedicalConditionMedication',
    });
  };
  return Medication;
};