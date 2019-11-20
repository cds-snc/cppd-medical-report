'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalConditionMedication = sequelize.define('MedicalConditionMedication', {
    medical_condition_id: DataTypes.INTEGER,
    medication_id: DataTypes.INTEGER,
  }, {});
  MedicalConditionMedication.associate = function(models) {
    // associations can be defined here
  };
  return MedicalConditionMedication;
};