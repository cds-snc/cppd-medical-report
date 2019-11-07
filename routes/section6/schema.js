const isValidDate = require('../../utils/custom/validate.helpers.js').isValidDate
const validateDateFormat = require('../../utils/custom/validate.helpers.js').validateDateFormat

const Schema = {
  stop_work: {
    isIn: {
      errorMessage: 'Stop working is required',
      options: [['1', '2', '3']],
    },
  },

  date_stopped_work: {
    custom: {
      options: (value, { req }) => {
        if (req.body.stop_work && req.body.stop_work === '1') { 
          if (!value) {
            this.message = 'Stop work date is required if stop work is selected'
            return false;
          } else {
            if (!validateDateFormat(value)) {
              this.message = 'Stop work date is incorrectly formatted'
              return false
            } else if (!isValidDate(value)) {
              this.message = 'Stop work date is not a valid date'
              return false
            }
          }
        }
        return true
      },
      errorMessage: () => {
        return this.message
      },
    },
  },

  return_to_work: {
    isIn: {
      errorMessage: 'Return to work is required',
      options: [['1', '2', '3']],
    },
  },

  return_to_work_timeframe: {
    custom: {
      options: (value, { req }) => {
        if (req.body.return_to_work && req.body.return_to_work === '1') { 
          if(!value) {
            return false
          }
        }
        return true
      },
      errorMessage: 'Return to work timeframe is required if return to work is yes',
    },
  },

  type_of_work: {
    custom: {
      options: (value, { req }) => {
        if (req.body.return_to_work && req.body.return_to_work === '1') { 
          if(!value) {
            return false
          }
        }
        return true
      },
      errorMessage: 'Type of work is required if return to work is yes',
    },
  },

  type_of_work_other: {
    custom: {
      options: (value, { req }) => {
        if (req.body.type_of_work && req.body.type_of_work === '4') { 
          if(!value) {
            return false
          }
        }
        return true
      },
      errorMessage: 'Other type of work is required if Other selected',
    },
  },
}

module.exports = {
  Schema,
}
