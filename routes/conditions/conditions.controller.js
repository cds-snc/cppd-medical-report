const { routeUtils, getSessionData } = require('./../../utils')
const { Schema } = require('./schema.js')
const featureFlag = require('./../../utils/featureFlags.helpers')

module.exports = (app, route) => {
  const name = route.name

  route
    .draw(app)
    .get((req, res) => {
      const data = getSessionData(req)

      if (!data.conditions || data.conditions.length === 0) {
        res.redirect(res.locals.routePath('add_condition'))
      } else {
        res.render(
          name,
          routeUtils.getViewData(req, { featureFlag: featureFlag }),
        )
      }
    })
    .post(route.applySchema(Schema), route.doRedirect())
}
