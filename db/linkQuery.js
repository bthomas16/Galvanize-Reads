const knex = require('./knex')

function bookInfo(book_id) {
  return knex('books')
    .where('book_id', book_id)
}

function authorInfo(author_id) {
  return knex('authors')
    .where('author_id', author_id)
}

module.exports = {
  bookInfo,
  authorInfo
}
