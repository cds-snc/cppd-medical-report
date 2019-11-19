import  * as Sequelize  from 'sequelize';


exports.up = function(knex) {
 return knex.schema.createTable('medical_reports', t => { 
    t.increments();
    // Section 1
    t.string('SIN', 9).notNullable();
    t.string('Title');
    t.string('FirstName').notNullable();
    t.string('MiddleName');
    t.string('LastName').notNullable();
    t.string('LastNameAtBirth');
    t.date('BirthDate').notNullable();
    t.string('Address');
    t.string('TelephoneNumber').notNullable();
    t.string('AltTelephoneNumber');
    t.enu('ContactPeriod',['am','pm','never'], {useNative: false, enumName: 'ContactPeriod'}).notNullable();

    // Section 2
    t.enu('Consent', ['yes', 'no'], {useNative: false, enumName: 'Consent'}).notNullable();
    // XXX: Storing this as a string right, will either be a blob or a link to a file in cloud
    t.string('Signature');
    t.string('WitnessFirstName');
    t.string('WitnessMiddleName');
    t.string('WitnessLastName');
    t.string('WitnessPhoneNumber');
    t.string('WitnessSignature');

    // Section 3
    t.enu('YearsInCare', ['<1','1-2','3-4','5>'], {useNative: false, enumName: 'YearsInCare'}).notNullable();
    t.integer('NumberOfVisitsInLastYear').notNullable();
    t.date('DateOfLastVisit').notNullable();
    t.date('DateOfFirstTreatmentForPrimaryCondition').notNullable();
  
    // Section 4
    t.enu('ConditionState', ['grave', 'terminal', 'neither'], {useNative: false, enuName: 'ConditionState'}).notNullable();
    t.string('TerminalCondition');
    t.string('ICD-9M-Code');
    t.date('DateOfSymptonOnset');

 })
 .createTable('medical-condition', t => {
    t.increments();
    t.string('ConditionName').notNullable();
    t.string('ICD-9-CM').notNullable();
    t.string('DateOfSymtponOnset').notNullable();
    t.string('Impairments').notNullable();
    t.string('FunctionalLimitations').notNullable();
    t.enu('Prognosis', ['improve', 'deteriorate', 'same', 'unknown'], {useNative: false, enuName: 'Prognosis'}).notNullable();
    t.enu('ExpectedDuration',['<1', '1>'], {useNative:false, enuName: 'ExpectedDuration'} ).notNullable();
    t.enu('Frequency', ['recurrant', 'continuous', 'unknown'], {useNative:false, enuName: 'Frequency'} ).notNullable();
    t.integer('medical_report_id').unsigned().notNullable();
    t.foreign('reportId').references('id').inTable('medical-report').onDelete('cascade')

  }).createTable('medication', t => { 
      t.increments();
      t.string('medicationInfo').notNullable();
      t.date('startDate');
      t.date('endDate');
      t.string('response');
  }).createTable('treatment', t => {
    t.increments();
    t.string('treatmentInfo'); 
    t.date('startDate');
    t.date('endDate');
    t.string('response');
  });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('treatment')
        .dropTable('medication')
        .dropTable('medical-condition')
        .dropTable('medical-report');
};
