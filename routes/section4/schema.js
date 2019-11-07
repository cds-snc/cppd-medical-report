/* istanbul ignore file */

const Schema = {
  condition_type: {
    isIn: {
      errorMessage: 'You must select an option',
      options: [['terminal', 'grave', 'none']],
    },
  },
}

module.exports = {
  Schema,
}
