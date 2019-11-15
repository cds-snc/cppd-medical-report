

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('medical-report').del()
    .then(function () {
      // Inserts seed entries
      return knex('medical-report').insert([
        {
          SIN: '111111119',
          FirstName: 'First',
          LastName: 'LastName',
          BirthDate: '0001-01-01',
          TelephoneNumber: '+1 (555) 555-5555',
          ContactPeriod: 'never',
        },
      ]);
    });
};
