

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('medical-report').del()
    .then(function () {
      // Inserts seed entries
      return knex('medical-report').insert([
        // Required Fields Only Needed
        {
          SIN: '111111119',
          FirstName: 'First',
          LastName: 'LastName',
          BirthDate: '0001-01-01',
          TelephoneNumber: '+1 (555) 555-5555',
          ContactPeriod: 'never',
          // Section 2
          Consent: 'yes',
          Signature: 'Signature',
          // Section 3 
          YearsInCare: '<1',
          NumberOfVisitsInLastYear: 100,
          DateOfLastVisit: '0001-01-01',
          DateOfFirstTreatmentForPrimaryCondition: '0001-01-01',
          // Section 4
          ConditionState: 'neither',
        },
      ]);
    });
};
