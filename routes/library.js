var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
const knex = require('../db/knex')

// router mounted at localhost:/3000/galvanize_reads/library

router.get('/authors', function(req, res, next) {
  knex('authors')
    .select()
    .then(authorss => {
      // console.log(authorss);
      res.render('library', { authorss });
    })
});

router.get('/books', function(req, res, next) {
  knex('books')
    .select()
    .then(bookss => {
      // console.log(bookss);
      res.render('library', { bookss });
    })
});

router.get('/books/:book_id/:title', (req, res) => {
  const book_id = req.params.book_id;
  linkQuery.bookInfo(book_id)
    .then(data => {
      console.log(data);
      res.render('singleBook', data[0])
    })
})

router.get('/authors/:author_id/:fName/:lName', (req, res) => {
  const author_id = req.params.author_id;
  linkQuery.authorInfo(author_id)
    .then(data => {
      console.log(data);
      res.render('singleAuthor', data[0])
    })
})

module.exports = router
