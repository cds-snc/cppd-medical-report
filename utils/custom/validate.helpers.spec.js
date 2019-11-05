const validateTelephoneFormat = require('./validate.helpers.js').validateTelephoneFormat
const validateDateFormat = require('./validate.helpers.js').validateDateFormat
const validateSINFormat = require('./validate.helpers.js').validateSINFormat
const validateSIN = require('./validate.helpers.js').validateSIN
const isValidDate = require('./validate.helpers.js').isValidDate
const daysInMonth = require('./validate.helpers.js').daysInMonth

test('passes valid phone number', () => {
    expect(validateTelephoneFormat('555-555-5555')).toBe(true)
})

test('validateTelephoneFormat validates a phone number with an international calling number', () => { 
    expect(validateTelephoneFormat('+1 555-555-5555')).toBe(true)
})

test('fails invalid phone number', () => {
    expect(validateTelephoneFormat('555 555 5555')).toBe(false)
    expect(validateTelephoneFormat('foo')).toBe(false)
    expect(validateTelephoneFormat('+1 5555-555-5555')).toBe(false)
    expect(validateTelephoneFormat('+1 555-5555-5555')).toBe(false)
    expect(validateTelephoneFormat('+1 555-555-55555')).toBe(false)
    expect(validateTelephoneFormat('+1 55-555-5555')).toBe(false)
    expect(validateTelephoneFormat('+1 555-55-5555')).toBe(false)
    expect(validateTelephoneFormat('+1 555-555-555')).toBe(false)
})

test('returns correct days in month', () => {
    expect(daysInMonth(1, 1973)).toBe(28)
    expect(daysInMonth(0, 1999)).toBe(31)
    expect(daysInMonth(1, 2000)).toBe(29)
})

test('passes valid date format', () => {
    expect(validateDateFormat('2019-11-03')).toBe(true)
})

test('fails invalid date format', () => {
    expect(validateDateFormat('11-03-2019')).toBe(false)
    expect(validateDateFormat('0001-101-01')).toBe(false)
    expect(validateDateFormat('0001-01-101')).toBe(false)
})

test('passes valid date', () => {
    expect(isValidDate('2019-11-11')).toBe(true)
})

test('fails invalid date', () => {
    expect(isValidDate('2019-11-99')).toBe(false)
    expect(isValidDate('foo')).toBe(false);
    expect(isValidDate('0001-101-01')).toBe(false)
    expect(isValidDate('0001-01-101')).toEqual(false)
})

test('valid sin format', () => {
    expect(validateSINFormat('999 999 999')).toBe(true)
    expect(validateSINFormat('999999999')).toBe(true)
})

test('invalid sin format', () => {
    expect(validateSINFormat('999-999-999')).toBe(false)
})

test('valid sin', () => {
    expect(validateSIN('913 093 282')).toBe(true)
})

test('passes ROEWeb Demo Sins', () => { 
    expect(validateSIN('990000002')).toBe(true)
    expect(validateSIN('990000028')).toBe(true)
    expect(validateSIN('990000044')).toBe(true)
    expect(validateSIN('990000069')).toBe(true)
    expect(validateSIN('990000085')).toBe(true)
    expect(validateSIN('990101008')).toBe(true)
    expect(validateSIN('990101024')).toBe(true)
    expect(validateSIN('990101040')).toBe(true)
    expect(validateSIN('990101065')).toBe(true)
    expect(validateSIN('990101081')).toBe(true)
    expect(validateSIN('990101073')).toBe(true)
})

test('invalid sin', () => {
    expect(validateSIN('913 093 000')).toBe(false)
})
