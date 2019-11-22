/* istanbul ignore file */

const Schema = {
  name: {
    isLength: {
      errorMessage: 'Name is required',
      options: { min: 1 },
    },
  },
}

module.exports = {
  Schema,
}
