const reduce = require('lodash.reduce')

const conditionReducer = (conditions) => {
  return reduce(
    conditions,
    (outList, condition, index) => {
      outList[index] = condition.name_of_condition
      return outList
    },
    {},
  )
}

const oneAttribute = (obj) => (Object.keys(obj).length === 1)

module.exports =  { conditionReducer, oneAttribute };