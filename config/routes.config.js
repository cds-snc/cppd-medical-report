// 1) add your route(s) here ⬇️
const routes = [
  { name: 'start', path: { en: '/start', fr: '/debut' } },
  { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
  { name: 'section2', path: {en:'/section2', fr: '/frsection2'}},
  { name: 'section3', path: { en: '/section3', fr: '/frsection3' } },
  { name: 'section4', path: { en: '/section4', fr: '/section4' } },
  { name: 'section5-cond1', path: { en: '/section5-cond1', fr: '/section5-cond1' }},
  { name: 'conditions', path: { en: '/conditions', fr: '/conditions' } },
  { name: 'medication', path: { en: '/medication', fr: '/medication' } },
  { name: 'treatments', path: { en: '/treatments', fr: '/traitement' } },
  { name: 'section6', path: { en: '/section6', fr: '/section6' } },
  { name: 'section7', path: { en: '/section7', fr: '/section7' } },
  { name: 'section8', path: { en: '/section8', fr: '/section8' } },
  { name: 'section9', path: { en: '/section9', fr: '/section9' } },
  { name: 'confirmation', path: '/confirmation' },

  { name: 'add_condition', path: '/add_condition' },
]

const locales = ['en', 'fr']

// note: you can define and export a custom configRoutes function here
// see route.helpers.js which is where the default one is defined
// if configRoutes is defined here it will be used in pacle of the default

module.exports = {
  routes,
  locales,
}
