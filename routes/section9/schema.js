/* istanbul ignore file */

const isValidDate = require('../../utils/custom/validate.helpers.js').isValidDate
const validateDateFormat = require('../../utils/custom/validate.helpers.js').validateDateFormat

const Schema = {
  i_am_a: {
    isIn: {
      errorMessage: 'I am a is required',
      options: [['1', '2', '3', 'other']],
    },
  },
  name: {
    isLength: {
      errorMessage: 'Name is required',
      options: { min: 1 },
    },
  },
  date: {
    customSanitizer: {
      options: value => {
        // We want to remove any spaces, dash or underscores
        return value ? value.replace(/[_]*/g, '') : value
      },
      errorMessage: 'Date format is incorrect',
    },
    custom: {
      options: (value, { req }) => {
        if (!value) {
          this.message = 'Date is required'
          return false
        }

        if (!validateDateFormat(value)) {
          this.message = 'Date is incorrectly formatted'
          return false
        } 
        
        if (!isValidDate(value)) {
          this.message = 'Date is not a valid date'
          return false
        }
        return true;
      },
      errorMessage: () => {
        return this.message
      },
    },
  },
  address: {
    isLength: {
      errorMessage: 'Address is required',
      options: { min: 1 },
    },
  },
}

module.exports = {
  Schema,
}
