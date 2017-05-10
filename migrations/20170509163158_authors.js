exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', function(table){
      table.increments('author_id').primary();
      table.string('fName').notNullable();
      table.string('lName').notNullable();
      table.text('biography')
      table.string('portrait')
    });
  };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('authors')
};
