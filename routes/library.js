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

router.get('/books/:id/:title', (req, res) => {
  const id = req.params.id;
  linkQuery.ideaInfo(id)
    .then(data1 => {
      console.log(data1);
      res.render('singleBook', data1[0])
    })
})

router.get('/authors/:id/:fName/:lName', (req, res) => {
  const id = req.params.id;
  linkQuery.ideaInfo(id)
    .then(data => {
      console.log(data);
      res.render('singleAuthor', data[0])
    })
})

module.exports = router
