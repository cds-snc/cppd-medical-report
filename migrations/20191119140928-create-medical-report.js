'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalReports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sin: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      middle_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      last_name_at_birth: {
        type: Sequelize.STRING,
      },
      birth_date: {
        type: Sequelize.DATEONLY,
      },
      address: {
        type: Sequelize.STRING,
      },
      telephone_number: {
        type: Sequelize.STRING,
      },
      alt_telephone_number: {
        type: Sequelize.STRING,
      },
      contact_period: {
        type: Sequelize.ENUM('am', 'pm', 'never'),
      },
      consent: {
        type: Sequelize.ENUM('yes', 'no'),
      },
      signature: {
        type: Sequelize.STRING,
      },
      witness_first_name: {
        type: Sequelize.STRING,
      },
      witness_middle_name: {
        type: Sequelize.STRING,
      },
      witness_last_name: {
        type: Sequelize.STRING,
      },
      witness_telephone_number: {
        type: Sequelize.STRING,
      },
      witness_signature: {
        type: Sequelize.STRING,
      },
      years_in_care: {
        type: Sequelize.ENUM('<1', '1-2', '3-4', '5>'),
      },
      number_of_visits_in_last_year: {
        type: Sequelize.INTEGER,
      },
      date_of_last_visit: {
        type: Sequelize.DATEONLY,
      },
      date_of_first_treatment_for_primary_condition: {
        type: Sequelize.DATEONLY,
      },
      condition_state: {
        type: Sequelize.ENUM('grave', 'terminal', 'neither'),
      },
      terminal_condition: {
        type: Sequelize.STRING,
      },
      icd_9m_code: {
        type: Sequelize.STRING,
      },
      date_of_sympton_onset: {
        type: Sequelize.DATEONLY,
      },
      medical_condition_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MedicalConditions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalReports')
  },
}
