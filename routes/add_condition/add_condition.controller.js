const { routeUtils, getSessionData, saveSessionData } = require('./../../utils')
const { Schema } = require('./schema.js')

module.exports = (app, route) => {
  const name = route.name

  route
    .draw(app)
    .get((req, res) => {
      res.render(name, routeUtils.getViewData(req, {}))
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
      data.conditions.push([body])

      // save that session data
      saveSessionData(req)

      // redirect back to conditions (should use named route - how do we do that?)
      res.redirect('/en/conditions')
    })
}
