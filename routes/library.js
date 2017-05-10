var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery')
const knex = require('../db/knex')

// router mounted at localhost:/3000/galvanize_reads/library

router.get('/authors', function(req, res, next) {
  knex('authors')
    .select()
    .then((authorss) => {
      // console.log(authorss);
      res.render('library', { authorss });
    })
  })

router.get('/books', function(req, res, next) {
  knex('books')
    .select()
    .then((bookss) => {
      // console.log(bookss);
      res.render('library', { bookss });
    })
})

router.get('/books/:book_id/:title', (req, res) => {
  const book_id = req.params.book_id;
  linkQuery.bookInfo(book_id)
    .then((data) => {
      console.log(data);
      res.render('singleBook', data[0])
    })
})

router.get('/authors/:author_id/:fName/:lName', (req, res) => {
  const author_id = req.params.author_id;
  linkQuery.authorInfo(author_id)
    .then((data) => {
      console.log(data);
      res.render('singleAuthor', data[0])
    })
  })

router.get('/books/new', (req,res) => {
  knex('authors')
    .select()
    .then((authorss) => {
      res.render('addBook', { authorss })
    })
  })

router.get('/authors/new', (req,res) => {
  res.render('addAuthor')
})

router.post('/books', (req, res) => {
  linkQuery.newBook(req.body)
  // console.log(req.body)
    .then(()=>{
      res.redirect("/galvanize_reads/library/books")
    })
  })

  router.get('/books/:book_id/:title/edit', (req, res) => {
    const book_id = req.params.book_id;
    linkQuery.bookInfo(book_id)
      .then((data) => {
        console.log(data);
        res.render('edit', data[0])
    })
})

router.post('/books/:book_id/:title/update', (req,res) => {
  console.log('edit me all night long');
  const books = {
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
    coverPic: req.body.coverPic
  }
    knex('books')
    .where('book_id', req.params.book_id)
    .update(books, 'book_id')
    .then(() => {
        res.redirect(`/galvanize_reads/library/books`)
        })
      })
  // var id = req.params.id
  // var title = req.params.title
  // linkQuery.updateBook(req.body, id)
  // .then(data=>{
  //   console.log(data);
  //   res.redirect('/galvanize_reads/library/books' + `/${id}/${title}`)

// router.put('/:id', (req, res) => {
//   validateTodoInsertUpdateRedirect(req, res, (todo) => {
//     todo.date = new Date()
//     knex('todo')
//     .where('id', req.params.id)
//     .update(todo, 'id')
//     .then(() => {
//         res.redirect(`/todo/${req.params.id}`)
//         })
//       })
// })




module.exports = router
