
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (table) => {
    table.increments('book_id').primary();
    table.string('title');
    table.string('genre');
    table.text('description');
    table.string('coverPic');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
