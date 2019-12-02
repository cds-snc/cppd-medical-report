const featureFlags = require('../utils/featureFlags.helpers')

function getRoutes() {
  if (featureFlags.USER_RESEARCH_20191125) {
    return [
      { name: 'start', path: { en: '/start', fr: '/debut' } },
      { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
      { name: 'conditions', path: { en: '/conditions', fr: '/conditions' } },
      { name: 'medications', path: { en: '/medications', fr: '/medicaments' } },
      { name: 'treatments', path: { en: '/treatments', fr: '/traitement' } },
      { name: 'health', path: { en: '/health', fr: '/health' } },
      { name: 'documents', path: { en: '/documents', fr: '/documents' } },
      { name: 'confirmation', path: '/confirmation' },
      {
        name: 'add_condition',
        path: { en: '/conditions/add', fr: '/conditions/ajouter' },
      },
      {
        name: 'edit_condition',
        path: { en: '/conditions/:id/edit', fr: '/conditions/:id/modifier' },
      },
      {
        name: 'delete_condition',
        path: { en: '/conditions/:id/delete', fr: '/conditions/:id/delete' },
      },
      {
        name: 'add_treatment',
        path: { en: '/treatments/add', fr: '/treatments/add' },
      },
      {
        name: 'delete_treatment',
        path: { en: '/treatments/:id/delete', fr: '/treatments/:id/delete' },
      },
      {
        name: 'add_medication',
        path: { en: '/medications/add', fr: '/medicaments/ajouter' },
      },
      {
        name: 'edit_medication',
        path: { en: '/medications/:id/edit', fr: '/medicaments/:id/modifier' },
      },
      {
        name: 'delete_medication',
        path: {
          en: '/medications/:id/delete',
          fr: '/medicaments/:id/supprimer',
        },
      },
    ]
  }

  return [
    { name: 'start', path: { en: '/start', fr: '/debut' } },
    // Section1
    { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
    // Section 2
    { name: 'section2', path: { en: '/section2', fr: '/frsection2' } },
    // Section 3
    { name: 'section3', path: { en: '/section3', fr: '/frsection3' } },
    // Section 4
    { name: 'section4', path: { en: '/section4', fr: '/frsection4' } },
    // Section 5
    { name: 'conditions', path: { en: '/conditions', fr: '/conditions' } },
    { name: 'medications', path: { en: '/medications', fr: '/medications' } },
    { name: 'treatments', path: { en: '/treatments', fr: '/traitement' } },
    // Section 7
    { name: 'health', path: { en: '/health', fr: '/health' } },
    // Section 8
    { name: 'documents', path: { en: '/documents', fr: '/documents' } },
    // Section 6
    { name: 'section6', path: { en: '/section6', fr: '/frsection6' } },
    // Section 9
    { name: 'section9', path: { en: '/section9', fr: '/frsection9' } },
    // Last step / confirmation
    { name: 'confirmation', path: '/confirmation' },
    // Routes that get triggered from other parts of the workflow
    {
      name: 'add_condition',
      path: { en: '/conditions/add', fr: '/conditions/ajouter' },
    },
    {
      name: 'delete_condition',
      path: { en: '/conditions/:id/delete', fr: '/conditions/:id/delete' },
    },
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
