require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME_DEV || "lrujdpzm",
    "password": process.env.DB_PASSWORD_DEV || "5x1q4pEtfm2IU8ePIhjNrRyJu357UqH0",
    "database": process.env.DB_DEV || "lrujdpzm",
    "host": "satao.db.elephantsql.com",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME_TEST,
    "password": process.env.DB_PASSWORD_TEST,
    "database": process.env.DB_TEST,
    "host": "satao.db.elephantsql.com",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME_PROD,
    "password": process.env.DB_PASSWORD_PROD,
    "database": process.env.DB_PROD,
    "host": "satao.db.elephantsql.com",
    "dialect": "postgres"
  }
}
