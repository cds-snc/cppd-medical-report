# Canada Pension Plan Disability (CPPD) - Medical Report (Form ISP-2519)

**Demo (`master` branch):** https://cppdmedicalreport-appservice.azurewebsites.net/

[ESDC](https://www.canada.ca/en/employment-social-development.html) and [CDS](https://digital.canada.ca) are working together to make [CPPD](https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-disability-benefit.html) better. We're focused on finding ways to shrink end-to-end processing time without decreasing the quality of decisions. We're currently building a prototype of the CPPD Medical Report as a way to explore some hypotheses and potentially make more of this process online.

For more information, contact us at [cds-snc@tbs-sct.gc.ca](mailto:cds-snc@tbs-sct.gc.ca).

## Setup

Requires the following things to be installed:

- Node.js v12.x (>= 12.13.0)
- npm 6.x (>= 6.13.0)
- (optional) Docker

### Development

#### Standalone

1. Clone this repo and navigate into it
1. `npm install`
1. `npm run dev`

#### With Docker

1. Clone this repo and navigate into it
1. (First time or whenever you change `Dockerfile`): `docker build . -t cppd-medical-report`
1. `docker run --it --rm cppd-medical-report npm run dev`

Protip: If you use Visual Studio Code, you can use the [Remote Development Extension](https://code.visualstudio.com/blogs/2019/05/02/remote-development) for an extra clean setup.

### Production

#### Standalone

1. Clone this repo (preferable a tag or `master`) and move into it
1. `npm install`
1. `npm start`

#### Docker

1. Clone this repo (preferably a tag or `master`) and move into it
1. `docker build . -t cppd-medical-report`
1. `docker run cppd-medical-report`

More documentation on working with this codebase can be found in [the docs folder](docs).
