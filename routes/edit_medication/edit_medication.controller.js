const {
  routeUtils,
  getSessionData,
  getClientJs,
  saveSessionData,
} = require('./../../utils')
const { Schema } = require('./schema.js')
const {
  conditionReducer,
  oneAttribute,
} = require('../../utils/custom/condition.mapper')

module.exports = (app, route) => {
  route
    .draw(app)
    .get((req, res) => {
      const data = getSessionData(req)
      const conditionList = conditionReducer(data.conditions)

      // redirect back if there are no conditions (session probably got cleared) - should flash a message
      if (!data.medications) {
        return res.redirect(res.locals.routePath('medication'))
      }

      const medication = data.medications[req.params.id - 1]

      // redirect back if the condition doesn't exist - maybe a stale url id - should flash a message
      if (!medication) {
        return res.redirect(res.locals.routePath('medication'))
      }

      const js = getClientJs(req, route.name)

      res.render(
        route.name,
        routeUtils.getViewData(req, {
          jsFiles: js ? [js] : false,
          medication: medication,
          conditionList,
          oneValue: oneAttribute(conditionList),
        }),
      )
    })
    .post(route.applySchema(Schema), (req, res) => {
      // first lets get the form data that was just posted and unset some things we don't need
      const data = getSessionData(req)
      const body = Object.assign({}, req.body)
      delete body.redirect
      delete body._csrf

      // the conditions array is 0 indexed
      const id = req.params.id - 1

      data.medications[id] = body

      // unset local fields so the form is clear when we come back to add a new one
      req.body.medication_name = null
      req.body.medication_dosage = null
      req.body.medication_frequency = null
      req.body.medication_start_date = null
      req.body.medication_end_date = null
      req.body.medication_treated_condition = null
      req.body.medication_results = null

      // save that session data
      saveSessionData(req)

      // redirect back to conditions (should use named route - how do we do that?)
      res.redirect(res.locals.routePath('medication'))
    })
}
