/* istanbul ignore file */

const Schema = {
  name_of_condition: {
    isLength: {
      errorMessage: 'errors.name_of_condition.length',
      options: { min: 1 },
    },
  },
  symptoms_began: {
    isLength: {
      errorMessage: 'errors.symptoms_began.length',
      options: { min: 1 },
    },
  },
  clinically_impair: {
    isLength: {
      errorMessage: 'errors.clinically_impair',
      options: { min: 1 },
    },
  },
  condition_outlook: {
    isIn: {
      errorMessage: 'errors.condition_outlook_required',
      options: [['1', '2', '3', '4']],
    },
  },
  condition_outlook_unknown: {
    custom: {
      options: (value, { req }) => {
        const conditionOutlook = req.body.condition_outlook
        if (conditionOutlook === '4') {
          if (value === '') {
            return false
          }
        }
        return true
      },
      errorMessage: 'errors.condition_outlook_unknown',
    },
  },
  condition_last: {
    isIn: {
      errorMessage: 'errors.condition_last_required',
      options: [['1', '2']],
    },
  },
  symptoms_occur: {
    isIn: {
      errorMessage: 'errors.symptoms_occur_required',
      options: [['1', '2', '3']],
    },
  },
}

module.exports = {
  Schema,
}
