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
        allowNull: false,
      },
      icd_9_cm: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_of_symptom_onset: {
        type: Sequelize.DATEONLY,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalConditions');
  },
};