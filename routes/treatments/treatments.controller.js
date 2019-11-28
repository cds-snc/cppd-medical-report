const { routeUtils, getSessionData } = require('./../../utils')
const { Schema } = require('./schema.js')

module.exports = (app, route) => {
  const name = route.name

  route
    .draw(app)
    .get((req, res) => {
      const data = getSessionData(req)

      if (!data.treatments || !data.treatments.length) {
        res.redirect(res.locals.routePath('add_treatment'))
      } else {
        res.render(name, routeUtils.getViewData(req, {}))
      }
    })
    .post(route.applySchema(Schema), route.doRedirect())
}
