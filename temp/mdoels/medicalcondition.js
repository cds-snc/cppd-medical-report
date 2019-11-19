'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalCondition = sequelize.define('MedicalCondition', {
    condition_name: DataTypes.STRING,
    icd_9_cm: DataTypes.STRING,
    date_of_symptom_onset: DataTypes.DATEONLY,
    impairments: DataTypes.STRING,
    functional_limitations: DataTypes.STRING,
  }, {});
  MedicalCondition.associate = function(models) {
    
    MedicalCondition.belongsToMany(models.Medication, {
      through: 'MedicalConditionMedication',
    });
    MedicalCondition.belongsToMany(models.treatment, {
      through: 'MedicalConditionTreatment',
    });
    // associations can be defined here
  };
  return MedicalCondition;
};