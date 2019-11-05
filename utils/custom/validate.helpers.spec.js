const {
    isValidDate,
    validateTelephoneFormat,
    validateDateFormat,
    validateSINFormat,
    validateSIN,
  } = require('./validate.helpers');

  test('isValidDate validates an unformated date', () => { 
      expect(isValidDate('0001-01-01')).toEqual(true)
  })
 
  test('isValidDate rejects an unformated date', () => { 
      expect(isValidDate('foo')).toEqual(false);
      expect(isValidDate('0001-101-01')).toEqual(false)
     // expect(isValidDate('0001-01-101')).toEqual(false)
  })

  test('validateTelephoneFormat validates a telephone', () => { 
      expect(validateTelephoneFormat('555-555-5555')).toEqual(true)
  })

  test('validateTelephoneFormat validates a phone number with an international calling number', () => { 
    expect(validateTelephoneFormat('+1 555-555-5555')).toEqual(true)
  })

  test('validateTelephoneFormat rejects an invalid telephone number', () => { 
      expect(validateTelephoneFormat('foo')).toEqual(false)
      expect(validateTelephoneFormat('+1 5555-555-5555')).toEqual(false)
      expect(validateTelephoneFormat('+1 555-5555-5555')).toEqual(false)
      expect(validateTelephoneFormat('+1 555-555-55555')).toEqual(false)
      expect(validateTelephoneFormat('+1 55-555-5555')).toEqual(false)
      expect(validateTelephoneFormat('+1 555-55-5555')).toEqual(false)
      expect(validateTelephoneFormat('+1 555-555-555')).toEqual(false)
  })

  test('validateDateFormat validates ISO 8601 date', () => { 
      expect(validateDateFormat('0001-01-01')).toEqual(true)
  })

  test('validateDateFormat fails a non ISO 8601 date', () => { 
      expect(validateDateFormat('01-01-0001')).toEqual(false)
      expect(validateDateFormat('0001-101-01')).toEqual(false)
      expect(validateDateFormat('0001-01-101')).toEqual(false)
  })

  test('validateSIN passes a valid fake SIN', () => { 
      expect(validateSIN('111 111 118')).toEqual(true)
  })


  test('validateSIN fails an invalid SIN', () => { 
      expect(validateSIN('123 456 789')).toEqual(false)
  })

  test('validateSINFormat validates a 9 digit number', () => { 
      expect(validateSINFormat('123 456 789')).toEqual(true)
  })

  test('validateSINFormat rejects a non 9 digit number', () => { 
      expect(validateSINFormat('123 456 78')).toEqual(false)
  })