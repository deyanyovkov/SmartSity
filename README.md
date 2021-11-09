# Smart City - Public Transport Data API
API used for storing data regarding busyness of pubic transport vehicles

- [Smart City - Public Transport Data API](#smart-city---public-transport-data-api)
  - [I. Global Requistites](#i-global-requistites)
  - [II. Running](#ii-running)
    - [For development](#for-development)
      - [Installing the packages](#installing-the-packages)
      - [Migrating the DB](#migrating-the-db)
      - [Starting the server](#starting-the-server)
  - [III. Production](#iii-production)
  - [IV. Environmental variables](#iv-environmental-variables)
  - [V. API Routes](#v-api-routes)
    - [Public](#public)
    - [Private](#private)
  - [VI. Documentation](#vi-documentation)
    - [TSDoc](#tsdoc)
    - [OpenAPI](#openapi)
  - [IX. Branches](#ix-branches)
  - [X. Resources](#x-resources)

## I. Global Requistites
- node (>= 10.5.0)
- yarn/npm
- MySQL Server

## II. Running
### For development

#### Installing the packages
```
yarn
```
#### Migrating the DB
```
yarn dev:db:migrate
```

#### Starting the server
```
yarn start:dev
```

## III. Production
Building
```
yarn run build
```

Build and Run Docker Image
```
docker compose up --build
```


Or to run it on the background, just add `-d` option:
```
docker compose up -d --build
```

Run migrations
```
yarn run start
```

** Make sure `NODE_ENV` is set to `prod` in production

## IV. Environmental variables
Stored in `.env` in the project root

| KEY                       | Description                                     |
| ------------------------- | ----------------------------------------------- |


Stored in `.env.development` and `.env.test` in the project root
| KEY                    | Description                                        |
| ---------------------- | -------------------------------------------------- |
| DB_USER                | Database User                                      |
| DB_PASS                | Database Password                                  |
| DB_HOST                | Database host                                      |
| DB_PORT                | Database port                                      |
| DB_NAME                | Database name                                      |

## V. API Routes
`/private` routes should be with restricted access. This should be done using an API Gateway as a first layer to each request

### Public
| Method | URI                             | Description             |
| ------ | ------------------------------- | ----------------------- |
| GET    | /busyness                       | Get all Busyness        |
| GET    | /busyness/:id                   | Get a Busyness          |
| GET    | /vehicle                        | Get all Vehicles        |
| GET    | /vehicle/:id                    | Get a Vehicle           |
| GET    | /vehicle-part                   | Get all Vehicle Parts   |
| GET    | /vehicle-part/:id               | Get a Vehicle Part      |
| POST   | /record                         | Create a new Record     |
| GET    | /record/:id                     | Get a Record            |
| PUT    | /record/:id                     | Update a Record         |
| DELETE | /record/:id                     | Delete a Record         |
### Private
| Method | URI                                     | Description             |
| ------ | --------------------------------------- | ----------------------- |
| POST   | /private/busyness                       | Add a new Busynes       |
| PUT    | /private/busyness/:id                   | Update a Busyness       |
| DELETE | /private/busyness/:id                   | Delete a Busyness       |
| POST   | /private/vehicle                        | Add a new Vehicle       |
| PUT    | /private/vehicle/:id                    | Update a Vehicle        |
| DELETE | /private/vehicle/:id                    | Delete a Vehicle        |
| POST   | /private/vehicle-part                   | Add a new Vehicle Part  |
| PUT    | /private/vehicle-part/:id               | Update a Vehicle Part   |
| DELETE | /private/vehicle-part/:id               | Delete a Vehicle Par    |
| GET    | /private/healthz                        | Health check            |


## VI. Documentation
### TSDoc
[TSDOC](https://tsdoc.org/) should be used to document the different parts of the project. `typedoc` is used on every commit, generating documentation in the `docs/` folder, which is then published on Gitlab pages. The documentation pages are for internal use only and are protected by default.

### OpenAPI
OpenAPI v3 documentation can be generated when `NODE_ENV=test`
Redoc-cli generates the documentation in the `docs/openapi` folder.

## IX. Branches
- master - Deafult branch

## X. Resources
Full developer documentatio is available in the `/docs` folder
- [Prisma](https://www.prisma.io/docs/)
- [joi](https://joi.dev/api/?v=17.4.2)
- [tsdoc](https://tsdoc.org)
- [swagger](https://swagger.io/docs/specification/about)
- [express](https://expressjs.com/en/4x/api.html)
