const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const cookieSession = require('cookie-session')
const featureFlags = require('../utils/featureFlags.helpers')

const oneHour = 1000 * 60 * 60
const sessionName = `ctb-${process.env.SESSION_SECRET ||
  Math.floor(new Date().getTime() / oneHour)}`
  
const cookieSessionConfig = {
  name: sessionName,
  secret: sessionName,
  cookie: {
    httpOnly: true,
    maxAge: oneHour,
    sameSite: true,
  },
}
const memorySessionConfig = {
  cookie: { httpOnly: true, maxAge: oneHour, sameSite: 'strict' },
  store: new MemoryStore({
    checkPeriod: oneHour, // prune expired entries every hour
  }),
  secret: sessionName,
  resave: false,
  saveUninitialized: false,
  unset: 'destroy',
}

const sessions = { 
  cookie : cookieSession(cookieSessionConfig),
  memory: session(memorySessionConfig),
}

// We default to memory, switch to cookie if you need to do testing on a single page
// or with a small amount of data
var appSession = sessions.memory;

if (featureFlags.COOKIE_STORE_20191126){ 
  appSession = session.cookie;
}

// default setup: https://github.com/roccomuso/memorystore#setup
// options: https://github.com/expressjs/session#options
module.exports = appSession