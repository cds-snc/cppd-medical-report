/* istanbul ignore file */

const Schema = {
  treatment_type: {
    isLength: {
      errorMessage: 'errors.treatment_type.length',
      options: { min: 1 },
    },
  },
  treatment_frequency: {
    isLength: {
      errorMessage: 'errors.treatment_frequency.length',
      options: { min: 1 },
    },
  },
  treatment_start_date: {
    isLength: {
      errorMessage: 'errors.treatment_start_date.length',
      options: { min: 1 },
    },
  },
  treatment_end_date: {
    isLength: {
      errorMessage: 'errors.treatment_end_date.length',
      options: { min: 1 },
    },
  },
  treatment_treated_condition: {
    custom: {
      options: (value, { req }) => {
        if (value === undefined || value.length === 0) {
          return false
        }
        return true
      },
      errorMessage: 'errors.treatment_treated_condition.is_checked',
    },
  },
  treatment_results: {
    isLength: {
      errorMessage: 'errors.treatment_results.length',
      options: { min: 1 },
    },
  },
}

module.exports = {
  Schema,
}
