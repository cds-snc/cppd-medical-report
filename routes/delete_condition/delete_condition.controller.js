/* istanbul ignore file */
const { getSessionData } = require('./../../utils')

module.exports = (app, route) => {
  route.draw(app).post((req, res) => {
    const data = getSessionData(req)
    const index = req.params.id - 1 // array is zero-indexed

    data.conditions.splice(index, 1)

    res.redirect(res.locals.routePath('conditions'))
  })
}
