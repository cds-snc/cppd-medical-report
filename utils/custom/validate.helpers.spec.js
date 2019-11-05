const validateTelephoneFormat = require('./validate.helpers.js').validateTelephoneFormat
const validateDateFormat = require('./validate.helpers.js').validateDateFormat
const validateSINFormat = require('./validate.helpers.js').validateSINFormat
const validateSIN = require('./validate.helpers.js').validateSIN
const isValidDate = require('./validate.helpers.js').isValidDate

test('passes valid phone number', () => {
    expect(validateTelephoneFormat('555-555-5555')).toBe(true)
})

test('fails invalid phone number', () => {
    expect(validateTelephoneFormat('555 555 5555')).toBe(false)
})

test('passes valid date format', () => {
    expect(validateDateFormat('2019-11-03')).toBe(true)
})

test('fails invalid date format', () => {
    expect(validateDateFormat('11-03-2019')).toBe(false)
})

test('passes valid date', () => {
    expect(isValidDate('2019-11-11')).toBe(true)
})

test('fails invalid date', () => {
    expect(isValidDate('2019-11-99')).toBe(false)
})

test('valid sin format', () => {
    expect(validateSINFormat('999 999 999')).toBe(true)
})

test('invalid sin format', () => {
    expect(validateSINFormat('999-999-999')).toBe(false)
})

test('valid sin', () => {
    expect(validateSIN('913 093 282')).toBe(true)
})

test('invalid sin', () => {
    expect(validateSIN('913 093 000')).toBe(false)
})
