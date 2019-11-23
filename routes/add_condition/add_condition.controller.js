/* istanbul ignore file */
const { routeUtils, getSessionData, saveSessionData, getClientJs } = require('./../../utils')
const { Schema } = require('./schema.js')

module.exports = (app, route) => {
  const name = route.name

  route
    .draw(app)
    .get((req, res) => {
      const js = getClientJs(req, route.name)

      res.render(route.name, routeUtils.getViewData(req, { jsFiles: js ? [js] : false }))
    })
    .post(route.applySchema(Schema), (req, res) => {
      // first lets get the form data that was just posted and unset some things we don't need
      const data = getSessionData(req)
      const body = Object.assign({}, req.body)
      delete body.redirect
      delete body._csrf

      // make sure there's a conditions array in session data for us to use
      if (!data.conditions) {
        data.conditions = []
      }

      // push our data onto the conditions array
      data.conditions.push(body)

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
