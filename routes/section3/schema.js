/* istanbul ignore file */

const isValidDate = require('../../utils/custom/validate.helpers.js').isValidDate
const validateDateFormat = require('../../utils/custom/validate.helpers.js').validateDateFormat

const Schema = {
  'numYearsWasPatient': { 
    isIn: {
      errorMessage: 'Must pick an option',
      options: [['1', '2', '3','4']],
    },
  },
  visitNumber: { 
    isLength: {
      errorMessage: 'You must enter how many times the patient has visited your office in the past 12 months.',
      options: { min: 1 },
    },
    isNumeric: { 
      errorMessage: 'Must be a number',
    },
  },
  lastVisitDate: {

    customSanitizer: {
      options: value => {
        // We want to remove any spaces, dash or underscores
        return value ? value.replace(/[_]*/g, '') : value
      },
      errorMessage: 'Date format is incorrect',
    },
    custom: {
      options: (value, { req }) => {
        if (!validateDateFormat(value)) {
          this.message = 'Date of last office visit is incorrectly formatted'
          return false
        } else if (!isValidDate(value)) {
          this.message = 'Date of last office visit is not a valid date'
          return false
        }
        return true;
      },
      errorMessage: () => {
        return this.message
      },
    },
  },
  firstTreatmentDate: {
    customSanitizer: {
      options: value => {
        // We want to remove any spaces, dash or underscores
        return value ? value.replace(/[_]*/g, '') : value
      },
      errorMessage: 'Date format is incorrect',
    },
    custom: {
      options: (value, { req }) => {
        if (!validateDateFormat(value)) {
          this.message = 'Date of first treatment is incorrectly formatted'
          return false
        } else if (!isValidDate(value)) {
          this.message = 'Date of first treatment is not a valid date'
          return false
        }
        return true;
      },
      errorMessage: () => {
        return this.message
      },
    },
  },
}

module.exports = {
  Schema,
}
