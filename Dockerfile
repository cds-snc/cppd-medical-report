FROM node:10-alpine AS base
LABEL maintainer="-"

ARG GITHUB_SHA_ARG
ENV GITHUB_SHA=$GITHUB_SHA_ARG

COPY . /src
WORKDIR /src

# Dev install so we can compile assets
RUN npm install --quiet
RUN npm run build

# Build a final container using dist assets from previous
FROM node:10-alpine AS final
WORKDIR /src
COPY . /src

RUN npm install --production

COPY --from=base /src/public/dist /src/public/dist

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]