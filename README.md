# Canada Pension Plan Disability (CPPD) - Medical Report (Form ISP-2519)

**Demo (`master` branch):** https://cppdmedicalreport-appservice.azurewebsites.net/

[ESDC](https://www.canada.ca/en/employment-social-development.html) and [CDS](https://digital.canada.ca) are working together to make [CPPD](https://www.canada.ca/en/services/benefits/publicpensions/cpp/cpp-disability-benefit.html) better. We're focused on finding ways to shrink end-to-end processing time without decreasing the quality of decisions. We're currently building a prototype of the CPPD Medical Report as a way to explore some hypotheses and potentially make more of this process online.

For more information, contact us at [cds-snc@tbs-sct.gc.ca](mailto:cds-snc@tbs-sct.gc.ca).

--- 

[ESDC](https://www.canada.ca/en/employment-social-development.html) et la [CDS](https://digital.canada.ca) travaillent ensemble pour améliorer le PPIRPC (programme de prestations d'invalidité du Régime de pensions du Canada). Nous travaillons à trouver des moyens de réduire le temps de traitement de bout en bout sans nuire à la qualité des décisions. Nous mettons actuellement au point un prototype du rapport médical sur le PPPC afin d’explorer certaines hypothèses et d’optimiser davantage ce processus en ligne.

Pour plus d'informations, contactez-nous à l'adresse [cds-snc@tbs-sct.gc.ca](mailto:cds-snc@tbs-sct.gc.ca).

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

#### Standalone with Postgres
*The environment variable UseDatabase must be set to true*

1. Clone this repo and navigate into it
1. `npm install`
1. `npm run db:install`
1. `npm run db:start`
1. `npm run db:migrate`
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


## Feature Flags

There are some feature flags that enable/disable features depending on whether they are set. The flags are set as OS environment variables that are detected at runtime. Below, are the list along with the default value in parenthesis `()` and a description of what happens when set to `true`.

- `FLAG_USER_RESEARCH_20191125` (`false`): Disables Sections 1-4, and has a shortened name-only entry form to being the workflow.
- `FLAG_COOKIE_STORE_20191126` (`true`): Enables cookie sessions for quickly iterating on a specific page, *note: cookie session can cause issues if you are storing too much in session*