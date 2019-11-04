/* istanbul ignore file */

const isValidDate = require('../../utils/').isValidDate

const Schema = {
  social: {
    isLength: {
      errorMessage: 'Social seems to be incorrect format',
      options: { min: 11, max: 11 },
    },
  },
  first_name: {
    isLength: {
      errorMessage: 'First name is required',
      options: { min: 3, max: 40 },
    },
  },
  last_name: {
    isLength: {
      errorMessage: 'Last name is required',
      options: { min: 3, max: 40 },
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
        return isValidDate(value)
      },
      errorMessage: 'Birthdate is required',
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
  },
  contact_time: {
    isIn: {
      errorMessage: 'Best time to contact you is required',
      options: [['morning', 'afternoon', 'letters_only']],
    },
  },
}

module.exports = {
  Schema,
}
