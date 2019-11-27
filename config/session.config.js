const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const cookieSession = require('cookie-session')

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

const appSession = sessions.cookie

// default setup: https://github.com/roccomuso/memorystore#setup
// options: https://github.com/expressjs/session#options
module.exports = appSession