const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile.js')[environment]
const pg = require('knex')(config)
module.exports = pg
