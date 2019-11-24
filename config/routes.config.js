// 1) add your route(s) here ⬇️
const routes = [
  { name: 'start', path: { en: '/start', fr: '/debut' } },
  { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
  { name: 'conditions', path: { en: '/conditions', fr: '/conditions' } },
  { name: 'medication', path: { en: '/medication', fr: '/medication' } },
  { name: 'treatments', path: { en: '/treatments', fr: '/traitement' } },
  { name: 'health', path: { en: '/health', fr: '/health' } },
  { name: 'confirmation', path: '/confirmation' },

  { name: 'add_condition', path: '/add_condition' },
  { name: 'add_medication', path: '/add_medication' },
  { name: 'add_treatment', path: '/add_treatment' },
]

const locales = ['en', 'fr']

// note: you can define and export a custom configRoutes function here
// see route.helpers.js which is where the default one is defined
// if configRoutes is defined here it will be used in pacle of the default

module.exports = {
  routes,
  locales,
}
