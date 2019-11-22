/* istanbul ignore file */

const Schema = {
  name: {
    isLength: {
      errorMessage: 'Test ID is required',
      options: { min: 1 },
    },
  },
}

module.exports = {
  Schema,
}
