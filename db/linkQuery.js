const knex = require('./knex')

function ideaInfo(id) {
  return knex('books')
    .where('id', id)
}

module.exports = {
  ideaInfo
}
