/* istanbul ignore file */
const { routeUtils, getSessionData, saveSessionData } = require('./../../utils')
const { Schema } = require('./schema.js')
const {
  conditionReducer,
  oneAttribute,
} = require('../../utils/custom/condition.mapper')

module.exports = (app, route) => {
  const name = route.name

  route
    .draw(app)
    .get((req, res) => {
      const data = getSessionData(req)
      const conditionList = conditionReducer(data.conditions)

      res.render(
        name,
        routeUtils.getViewData(req, {
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

      // make sure there's a conditions array in session data for us to use
      if (!data.medications) {
        data.medications = []
      }

      // push our data onto the conditions array
      data.medications.push(body)

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

      // redirect back to medications
      res.redirect(res.locals.routePath('medications'))
    })
}
