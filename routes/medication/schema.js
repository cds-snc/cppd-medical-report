/* istanbul ignore file */
const Schema = {
  firstname: {
    isLength: {
      errorMessage: 'errors.firstname.length',
      options: { min: 3, max: 200 },
    },
  },
  medication_name: { 
    isLength: { 
      errorMessage: 'errors.medication_name.length',
      options: { min: 1 },
    },
  },
  medication_dosage: {
    isLength: { 
      errorMessage: 'errors.medication_name.length',
      options: { min: 1 },
    },
  },
  medication_frequency: {
    isLength: { 
      errorMessage: 'errors.medication_name.length',
      options: { min: 1 },
    },
  },
  medication_start_date : {
    isLength: { 
      errorMessage: 'errors.medication_name.length',
      options: { min: 1 },
    },
  },
  medication_end_date: { 
    isLength: { 
      errorMessage: 'errors.medication_name.length',
      options: { min: 1 },
    },
  },
  medication_treated_condition: {
    custom: {
      options: (value, { req }) => {
        console.log(JSON.stringify(value))
        if(value === undefined || value.length === 0){
          return false;
        }
        return true;
      },
      errorMessage: 'errors.medication_treated_condition.is_checked',
    },
  },
  medication_results: {
    isLength: { 
      errorMessage: 'errors.medication_name.length',
      options: { min: 1 },
    },
  },
}

module.exports = {
  Schema,
}
