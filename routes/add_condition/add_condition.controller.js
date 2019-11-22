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
      // console.log('====req.body====')
      // console.log(req.body)

      // console.log('====req.session.formdata====')
      // console.log(req.session.formdata)

      // console.log('====getSessionData(req)====')
      // console.log(getSessionData(req))

      const data = getSessionData(req)
      const body = Object.assign({}, req.body)
      delete body.redirect
      delete body._csrf

      if (!data.conditions) {
        data.conditions = []
        console.log('Make a conditions')
      }

      data.conditions.push([body])

      saveSessionData(req)
      res.redirect('/en/conditions')
    })
}
