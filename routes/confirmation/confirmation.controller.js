const {
  validateRouteData,
  getViewData,
  setFlashMessageContent,
  getSessionData,
} = require('../../utils/index')

const models = require('../../models')

function mapContactTime(index){ 
  return ['am','pm','never'][index];
}

function mapConsent(index){ 
  return ['yes','no'][index];
}

module.exports = (app, route) => {
  route.draw(app)
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
    }).post((req, res) => {
      const data = getSessionData(req);
      models.MedicalReport.create({
        sin: data.social,
        title: data.preferred_title,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        last_name_at_birth: data.birth_last_name,
        birth_Date: data.birthdate,
        address: data.address,
        telephone_Number: data.telephone,
        alt_telephone_number: data.alternate_telephone,
        contact_period: mapContactTime(data.contact_time),
        consent: mapConsent(data.consent),
        signature: data.signature,
        witness_first_name: data.witnessFirst,
        witness_middle_name: data.witnessMiddle,
        witness_last_name: data.witnessLast,
        witness_telephone_number: data.witnessPhone,
        witness_signature: data.witnessSignature,
      }).then(() => { 
        console.log('saved to db');
      }).catch(err => {
        console.log(err)
      });




    });
}
