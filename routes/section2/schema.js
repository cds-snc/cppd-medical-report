const validateTelephoneFormat = require('../../utils/custom/validate.helpers.js').validateTelephoneFormat

const Schema = {
  consent: {
    isIn: {
      errorMessage: 'You must select an option',
      options: [['1', '2']],
    },
  },
  signature: {
    custom: {
      options: (value, { req }) => {
        const consent = req.body.consent
        if (consent && consent === '1') {
          if (typeof value === 'undefined' || value === '') {
            return false
          }
        } else {
          req.body.signature = undefined
        }

        return true
      },
      errorMessage: 'Signature is Required if you Consent',
    },
  },
  witnessFirst: {
  },
  witnessSecond: {
  },
  witnessLast: {
  },
  witnessPhone: { 
    options: (value, { req }) => {
      if (!value) { return true }
      return validateTelephoneFormat(value)
    },
    errorMessage: 'Witness Telephone is incorrectly formatted',
  }, 
  witnessSignature: { 

  },
}

module.exports = {
  Schema,
}
