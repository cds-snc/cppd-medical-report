'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalConditionMedications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      medical_condition_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MedicalConditions',
          key: 'id',
        },
      },
      medication_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Medications',
          key: 'id',
        },
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
    return queryInterface.dropTable('MedicalConditionMedications');
  }
};