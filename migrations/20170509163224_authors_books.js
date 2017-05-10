
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors_books', function(table){
    table.increments()
    table.integer('books_id').references('books.book_id');
    table.integer('authors_id').references('authors.author_id');
    })
  }

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('authors_books')
};
