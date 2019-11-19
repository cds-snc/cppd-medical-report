'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalConditionTreatment = sequelize.define('MedicalConditionTreatment', {
    medicalConditionId: DataTypes.INTEGER,
    treatmentId: DataTypes.INTEGER
  }, {});
  MedicalConditionTreatment.associate = function(models) {
    // associations can be defined here
  };
  return MedicalConditionTreatment;
};