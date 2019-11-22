const {
  routeUtils,
  getClientJs,
  getSessionData,
  saveSessionData,
} = require('./../../utils')
const { Schema } = require('./schema.js')

module.exports = (app, route) => {
  route
    .draw(app)
    .get((req, res) => {
      const js = getClientJs(req, route.name)

      const data = getSessionData(req)
      console.log(data.conditions)

      res.render(
        route.name,
        routeUtils.getViewData(req, { jsFiles: js ? [js] : false }),
      )
    })
    .post(route.applySchema(Schema), (req, res) => {
      console.log('====req.body====')
      console.log(req.body)

      console.log('====req.session.formdata====')
      console.log(req.session.formdata)

      console.log('====getSessionData(req)====')
      console.log(getSessionData(req))

      const data = getSessionData(req)

      // if (!data.conditions) {
      data.conditions = []
      console.log('Make a conditions')
      // }

      data.conditions.push([req.body])
      console.log('====data====')
      console.log(data)

      saveSessionData(req)
      res.redirect('/en/confirmation')
    })
}
