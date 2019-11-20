'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('MedicalReport',[{
      sin: '111111118',
      title: 'Mr.',
      first_name: 'First Name',
      middle_name: 'Middle Name',
      last_name: 'Last Name',
      last_name_at_birth: 'Birth Name',
      birth_Date: '0001-01-01',
      address: '123 AnyTown \n Ottawa On \n h0h0h0',
      telephone_Number: '+01 (555)-555-5555',
      alt_telephone_number: '+01 (555)-555-5555',
      contact_period: 'am',
      consent: 'yes',
      signature: 'x',
      witness_first_name: 'Witness First Name',
      witness_middle_name: 'Witness Middle Name',
      witness_last_name: 'Witness Last Name',
      witness_telephone_number: '+01 (555)-555-5555',
      witness_signature: 'witness sig',
      years_in_care: '<1',
      number_of_visits_in_last_year: 100,
      dateof_last_visit: '0001-01-01',
      dateof_first_treatment_for_primary_condition: '0001-01-01',
      condition_state: 'terminal',
      terminal_condition: "A description of the terminal condition",
      icd_9m_code: '555',
      date_of_sympton_onset: '0001-01-01',
      }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
