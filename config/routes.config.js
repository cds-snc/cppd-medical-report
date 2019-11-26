const featureFlags = require('../utils/featureFlags.helpers')

function getRoutes() {
  if (featureFlags.USER_RESEARCH_20191125) {
    return [
      { name: 'start', path: { en: '/start', fr: '/debut' } },
      { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
      { name: 'conditions', path: { en: '/conditions', fr: '/conditions' } },
      { name: 'medication', path: { en: '/medication', fr: '/medication' } },
      { name: 'treatments', path: { en: '/treatments', fr: '/traitement' } },
      { name: 'health', path: { en: '/health', fr: '/health' } },
      { name: 'documents', path: { en: '/documents', fr: '/documents' } },
      { name: 'confirmation', path: '/confirmation' },
      { name: 'add_condition', path: '/add_condition' },
      { name: 'add_medication', path: '/add_medication' },
      { name: 'add_treatment', path: '/add_treatment' },
    ]
  }

  return [
    { name: 'start', path: { en: '/start', fr: '/debut' } },
    { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
    { name: 'section2', path: { en: '/section2', fr: '/frsection2' } },
    { name: 'section3', path: { en: '/section3', fr: '/frsection3' } },
    // Section 5
    { name: 'conditions', path: { en: '/conditions', fr: '/conditions' } },
    { name: 'medication', path: { en: '/medication', fr: '/medication' } },
    { name: 'treatments', path: { en: '/treatments', fr: '/traitement' } },
    { name: 'health', path: { en: '/health', fr: '/health' } },
    { name: 'documents', path: { en: '/documents', fr: '/documents' } },
    { name: 'confirmation', path: '/confirmation' },
    { name: 'add_condition', path: '/add_condition' },
    { name: 'add_medication', path: '/add_medication' },
    { name: 'add_treatment', path: '/add_treatment' },
  ]
}


// 1) add your route(s) here ⬇️
const routes = getRoutes()

const locales = ['en', 'fr']

// note: you can define and export a custom configRoutes function here
// see route.helpers.js which is where the default one is defined
// if configRoutes is defined here it will be used in pacle of the default

module.exports = {
  routes,
  locales,
}
