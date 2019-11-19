import Sequelize from 'sequelize'

const Model = Sequelize.Model

class MedicalReport extends Model {}

MedicalReport.init({
  sin: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  middle_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name_at_birth: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  birth_date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  telephone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  alt_telephone_number: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  contact_period: {
    type: Sequelize.ENUM('am', 'pm', 'never'),
    allowNull: false,
  },
  consent: {
    type: Sequelize.ENUM('yes', 'no'),
    allowNull: false,
  },
  signature: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  witness_first_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  witness_middle_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  witness_last_name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  witness_phone_number: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  witness_signature: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  years_in_care: {
    type: Sequelize.ENUM('<1', '1-2', '3-4', '5>'),
    allowNull: true,
  },
  number_of_visits_in_last_year: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
  },
  date_of_last_visit: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  date_of_first_treatment_for_primary_condition: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  condition_state: {
    type: Sequelize.ENUM('grave', 'terminal', 'neither'),
    allowNull: false,
  },
  terminal_condition: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  icd_9m_code: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  date_of_sympton_onset: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
})

class MedicalCondition extends Model {}

MedicalCondition.init({
  condition_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  icd_9_cm: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date_of_symtpon_onset: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  impairments: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  functional_limitations: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  prognosis: {
    type: Sequelize.ENUM('improve', 'deteriorate', 'same', 'unknown'),
    allowNull: false,
  },
  expected_duration: {
    type: Sequelize.ENUM('<1', '1>'),
    allowNull: false,
  },
  frequency: {
    type: Sequelize.ENUM('recurrant', 'continuous', 'unknown'),
    allowNull: false,
  },
  medical_report_id: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: MedicalReport,
      key: 'id',
    },
  },
})

class Medication extends Model {}

Medication.init({
  medication_info: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  response: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

class Treatment extends Model {}
Treatment.init({
  treatment_info: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  start_date: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  endDate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  response: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
