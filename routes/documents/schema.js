/* istanbul ignore file */

const Schema = {
  supporting_documents: {
    custom: {
      options: (value, { req }) => {
        const attachLater = req.body.attach_later
        if (typeof attachLater === 'undefined') {
          if (value === '') {
            return false
          }
        }
        return true
      },
      errorMessage: 'errors.supporting_documents_required',
    },
  },
}

module.exports = {
  Schema,
}
