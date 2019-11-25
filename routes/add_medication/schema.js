/* istanbul ignore file */

const Schema = {
  medication_name: {
    isLength: {
      errorMessage: 'errors.medication_name.length',
      options: { min: 1 },
    },
  },
  medication_dosage: {
    isLength: {
      errorMessage: 'errors.medication_dosage.length',
      options: { min: 1 },
    },
  },
  medication_frequency: {
    isLength: {
      errorMessage: 'errors.medication_frequency.length',
      options: { min: 1 },
    },
  },
  medication_start_date: {
    isLength: {
      errorMessage: 'errors.medication_start_date.length',
      options: { min: 1 },
    },
  },
  medication_end_date: {
    isLength: {
      errorMessage: 'errors.medication_end_date.length',
      options: { min: 1 },
    },
  },
  medication_treated_condition: {
    custom: {
      options: (value, { req }) => {
        if (value === undefined || value.length === 0) {
          return false
        }
        return true
      },
      errorMessage: 'errors.medication_treated_condition.is_checked',
    },
  },
  medication_results: {
    isLength: {
      errorMessage: 'errors.medication_results.length',
      options: { min: 1 },
    },
  },
}

module.exports = {
  Schema,
}
