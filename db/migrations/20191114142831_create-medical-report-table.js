
exports.up = function(knex) {
 return knex.schema.createTable('medical-report', t => { 
    t.increments();
    t.string('SIN', 9).notNullable();
    t.string('Title',4);
    t.string('FirstName',40).notNullable();
    t.string('MiddleName',40);
    t.string('LastName',40).notNullable();
    t.string('LastNameAtBirth',40);
    t.date('BirthDate').notNullable();
    t.string('Address',255);
    t.string('TelephoneNumber', 40).notNullable();
    t.string('AltTelephoneNumber', 40);
    t.enu('ContactPeriod',['am','pm','never'], {useNative: false, enumName: 'ContactPeriod'}).notNullable();
 });
};

exports.down = function(knex) {
    return knex.schema.dropTable('medical-report');
};
