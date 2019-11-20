'use strict';
module.exports = (sequelize, DataTypes) => {
  const MedicalReport = sequelize.define('MedicalReport', {
    sin: DataTypes.STRING,
    title: DataTypes.STRING,
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    last_name_at_birth: DataTypes.STRING,
    birth_date: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    telephone_number: DataTypes.STRING,
    alt_telephone_number: DataTypes.STRING,
    contact_period: DataTypes.ENUM('am','pm','never'),
    consent: DataTypes.ENUM('yes','no'),
    signature: DataTypes.STRING,
    witness_first_name: DataTypes.STRING,
    witness_middle_name: DataTypes.STRING,
    witness_last_name: DataTypes.STRING,
    witness_telephone_number: DataTypes.STRING,
    witness_signature: DataTypes.STRING,
    years_in_care: DataTypes.ENUM('<1','1-2','3-4','5>'),
    number_of_visits_in_last_year: DataTypes.INTEGER,
    date_of_last_visit: DataTypes.DATEONLY,
    date_of_first_treatment_for_primary_condition: DataTypes.DATEONLY,
    condition_state: DataTypes.ENUM('grave', 'terminal', 'neither'),
    terminal_condition: DataTypes.STRING,
    icd_9m_code: DataTypes.STRING,
    date_of_sympton_onset: DataTypes.DATEONLY,
  }, {});
  MedicalReport.associate = function(models) {
    MedicalReport.hasMany(models.MedicalCondition); 
    // associations can be defined here
    // MedicalReport.hasMany(models.MedicalCondition, {
    //   as: 'medical_conditions',
    // })
  };
  return MedicalReport;
};