'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalConditions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      condition_name: {
        type: Sequelize.STRING,
      },
      icd_9_cm: {
        type: Sequelize.STRING,
      },
      date_of_symptom_onset: {
        type: Sequelize.DATEONLY,
      },
      impairments: {
        type: Sequelize.STRING,
      },
      functional_limitations: {
        type: Sequelize.STRING,
      },
      prognosis: {
        type: Sequelize.ENUM('improve', 'deteriorate', 'same', 'unknown'),
      },
      expected_duration: {
        type: Sequelize.ENUM('<1', '1>'),
      },
      frequency: {
        type: Sequelize.ENUM('recurrant', 'continuous', 'unknown'),
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalConditions');
  },
};