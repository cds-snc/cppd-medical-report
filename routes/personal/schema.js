/* istanbul ignore file */
const featureFlag = require('./../../utils/featureFlags.helpers')
const isValidDate = require('../../utils/custom/validate.helpers.js').isValidDate
const validateTelephoneFormat = require('../../utils/custom/validate.helpers.js').validateTelephoneFormat
const validateDateFormat = require('../../utils/custom/validate.helpers.js').validateDateFormat
const validateSIN = require('../../utils/custom/validate.helpers.js').validateSIN
const validateSINFormat = require('../../utils/custom/validate.helpers.js').validateSINFormat

function makeSchema() {
  if (featureFlag.USER_RESEARCH_20191125) {
    return {
      name: {
        isLength: {
          errorMessage: 'Name is required',
          options: { min: 1 },
        },
      },
    }
  }
  else {
    return {
      social: {
        isLength: {
          errorMessage: 'Social is required',
          options: { min: 1 },
        },
        custom: {
          options: (value, { req }) => {
            if (!validateSINFormat(value)) {
              this.message = 'SIN is formatted incorrectly'
              return false
            }
            if (!validateSIN(value)) {
              this.message = 'SIN is invalid'
              return false
            }
            return true
          },
          errorMessage: () => {
            return this.message
          },
        },
      },
      first_name: {
        isLength: {
          errorMessage: 'First name is required',
          options: { min: 1 },
        },
      },
      last_name: {
        isLength: {
          errorMessage: 'Last name is required',
          options: { min: 1 },
        },
      },
      birthdate: {
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
              this.message = 'Birthdate is incorrectly formatted'
              return false
            } else if (!isValidDate(value)) {
              this.message = 'Birthdate is not a valid date'
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
          errorMessage: 'Mailing address is required',
          options: { min: 1 },
        },
      },
      telephone: {
        isLength: {
          errorMessage: 'Telephone is required',
          options: { min: 1 },
        },
        custom: {
          options: (value, { req }) => {
            return validateTelephoneFormat(value)
          },
          errorMessage: 'Telephone is incorrectly formatted',
        },
      },
      alternate_telephone: {
        custom: {
          options: (value, { req }) => {
            if (!value) { return true }
            return validateTelephoneFormat(value)
          },
          errorMessage: 'Alternate Telephone is incorrectly formatted',
        },
      },
      contact_time: {
        isIn: {
          errorMessage: 'Best time to contact you is required',
          options: [['morning', 'afternoon', 'letters_only']],
        },
      },
    }
  }
}

const Schema = makeSchema()

module.exports = {
  Schema,
}
