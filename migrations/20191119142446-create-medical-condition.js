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