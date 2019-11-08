# Dev Basics

The repo provides some of the following things, as inherited by its [template project](https://github.com/cds-snc/node-starter-app).

- Templated pages that look and feel like Government of Canada pages
- Add endpoints ([../routes/URLs](#adding-routes)) for web form workflows, complete with [form validation](#form-validation)
- Prevents [forged cross-site requests](#form-csrf-protection)
- Translation ready, [using name/value pairs configs](#locales)
- Fast deployment, currently for [Azure](../terraform/readme.md) via [Terraform](https://terraform.io)
- Continuous integration checks that run automatically via [GitHub Actions](https://github.com/features/actions)
  - [Accessibility](.github/workflows/a11y.yml)
  - [Code Styling / Linting]((.github/workflows/nodejs.yml))
  - Scanning codebase for [accidental secret leaking]((.github/workflows/secret.yml))

It's setup with some sensible defaults and tech choices, such as:

- Node.js >= 12.x
- [Express](https://expressjs.com/) web framework
- [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) view templates
- Sass (Syntactically Awesome Style Sheets) for reusable styles

## How To

### Adding Routes
Generate the route files
```
node ./bin/route.js create --route your_route_name
```

The created route directory by default contains the following files:
- your_route_name.controller.js
- your_route_name.pug
- schema.js (used for form views)


Register the route via [routes.config.js](https://github.com/cds-snc/node-starter-app/blob/master/config/routes.config.js)

```javascript
// config/routes.config.js
...
const routes = [
  { name: "your_route_name", path: "/your_route_name" },
];
...
```

Note: Delete unused route(s) directories as needed.

### Form step redirects

Redirects are handled via `route.doRedirect()`. The doRedirect function will do a look up for the next route based on the routes config.

For cases where the redirect is not straight forward you can pass in a function, which can return a route name or a route object:

```javascript
// routes.config.js
const routes = [
  ...
  { name: 'my-route', ..., skipTo: 'other-route' }
  ...
]

// my-route.controller.js
route.draw(app)
  .post(..., route.doRedirect((req, res) => shouldSkip(req) ? route.skipTo : route.next))
```

### Form CSRF Protection

CSRF protection for forms is provided by [csurf](https://github.com/expressjs/csurf) middleware.

Note that the CSRF token is passed to all templates through response.locals, ie:

```javascript
// append csrfToken to all responses
app.use(function (req, res, next) {
  res.locals.csrfToken = req.csrfToken()
  next()
})
```

To successfully submit a form, you must include a CSRF token in a hidden field:

```html
<input type="hidden" name="_csrf" value="{{ csrfToken }}">
```

If using JS/Ajax, you can get the csrf token from the header meta tag included in the base template:

```html
<meta name="csrf-token" content="{{ csrfToken }}">
```

The following is an example of using the Fetch API to post to the `/personal` route with the CSRF token from the `<meta>` tag on the page:

```javascript
// Read the CSRF token from the <meta> tag
var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

// Make a request using the Fetch API
fetch('/process', {
  credentials: 'same-origin', // <-- includes cookies in the request
  headers: {
    'CSRF-Token': token // <-- is the csrf token as a header
  },
  method: 'POST',
  body: {
    favoriteColor: 'blue'
  }
})
```

### Locales

Text on pages is supplied via ids

```pug
block variables
  -var title = __('personal.title')

block content

  h1 #{title}

  div
    p #{__('personal.intro')}
  form(method='post')
```

```json
// locales/en.json
"personal.title": "Personal Information",
"personal.intro": "Intro copy goes here",
"form.fullname": "Full name",
```

### Form Validation

- Form validation is built into the form schema files and use [validator.js](https://github.com/validatorjs/validator.js#validators) to validate input

> To mark fields showing as required you can pass required: true as an attribute

### Template Engine

[Nunjucks](https://mozilla.github.io/nunjucks/)

### Common View Helpers

See views/_includes

### Change configuration

Don't like the way it's setup -> it's an Express server so do your thing `app.js`

### CLI

There is a basic CLI tool that allows you to perform some functions:

```
> node ./bin/cli.js routes
[ { name: 'sample', path: '/sample' },
  { name: 'start', path: '/start' },
  { name: 'personal', path: '/personal' },
  { name: 'confirmation', path: '/confirmation' } ]
```