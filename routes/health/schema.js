/* istanbul ignore file */

const Schema = {
  overall_health: {
    isLength: {
      errorMessage: 'errors.overall_health_required',
      options: { min: 1 },
    },
  },
}

module.exports = {
  Schema,
}
