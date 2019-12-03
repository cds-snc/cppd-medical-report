const {
  routeUtils,
  getSessionData,
  saveSessionData,
  getClientJs,
} = require('./../../utils')
const { Schema } = require('./schema.js')

module.exports = (app, route) => {
  route
    .draw(app)
    .get((req, res) => {
      const data = getSessionData(req)

      // redirect back if there are no conditions (session probably got cleared) - should flash a message
      if (!data.conditions) {
        return res.redirect('/en/conditions')
      }

      const condition = data.conditions[req.params.id - 1]

      // redirect back if the condition doesn't exist - maybe a stale url id - should flash a message
      if (!condition) {
        return res.redirect('/en/conditions')
      }

      const js = getClientJs(req, route.name)

      res.render(
        route.name,
        routeUtils.getViewData(req, {
          jsFiles: js ? [js] : false,
          condition: condition,
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
      const conditionId = req.params.id - 1

      data.conditions[conditionId] = body

      // unset local fields so the form is clear when we come back to add a new one
      req.body.name_of_condition = null
      req.body.symptoms_began = null
      req.body.clinically_impair = null
      req.body.condition_outlook = null
      req.body.condition_last = null
      req.body.symptoms_occur = null
      req.body.condition_files = []

      // save that session data
      saveSessionData(req)

      // redirect back to conditions (should use named route - how do we do that?)
      res.redirect('/en/conditions')
    })
}
