exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors_books').del()
    .then(function () {
      return knex('authors_books').insert([
        // Inserts seed entries
        {
          authors_id: 2,
          books_id: 1
        },
        {
          authors_id: 2,
          books_id: 1
        },
        {
          authors_id: 2,
          books_id: 1
        },
        {
          authors_id: 2,
          books_id: 2
        },
        {
          authors_id: 2,
          books_id: 2
        },
        {
          authors_id: 1,
          books_id: 4
        },
        {
          authors_id: 1,
          books_id: 4
        },
        {
          authors_id: 1,
          books_id: 4
        }
      ]);
    });
};
