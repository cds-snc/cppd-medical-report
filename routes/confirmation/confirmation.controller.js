const {
  validateRouteData,
  getViewData,
  setFlashMessageContent,
  getSessionData,
} = require('../../utils/index')

module.exports = (app, route) => {
  route
    .draw(app)
    .get(async (req, res) => {
      // ⚠️ experimental
      // validate data from previous step
      // see if we should be allowed to reach this step
      const { Schema } = require('../personal/schema.js')
      const result = await validateRouteData(req, Schema)
      if (!result.status) {
        setFlashMessageContent(req, result.errors)
      }
      res.render(route.name, getViewData(req))
    })
    .post((req, res) => {
      const fs = require('fs')
      const data = JSON.stringify(getSessionData(req))

      const filename = Date.now() + '.json'

      fs.writeFileSync(filename, data)

      res.redirect('/clear')

      /*
      if (process.env.UseDatase) {
        const data = getSessionData(req)
        
        const models = require('../../models')
        models.MedicalReport.create({
          sin: data.social,
          title: data.preferred_title,
          first_name: data.first_name,
          middle_name: data.middle_name,
          last_name: data.last_name,
        })
          .then(() => {
            console.log('saved to db')
          })
          .catch(err => {
            console.log(err)
          })

        }
        */
    })
}
