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
      res.render('authors_library', { authorss });
    })
  })

router.get('/books', function(req, res, next) {
  // knex('books').select()
  linkQuery.allBooks()
    .then(data => {
      console.log('HEY');
      console.log(data);
      res.render('library', {data})
    })
})

router.get('/books/:book_id/:title', (req, res) => {
  const book_id = req.params.book_id;
  linkQuery.bookInfo(book_id).where('books.book_id', book_id)
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
  knex('books')
    .select()
    .then((bookss) => {
  res.render('addAuthor', { bookss })
  })
})

router.post('/books', (req, res) => {
  author_id = req.body.authorSelect
  linkQuery.newBook(req.body)
  // console.log(req.body)
    .then(()=>{
      linkQuery.booksPop().then(books => {
        var lastObject = books.pop()
          linkQuery.addJoinTable(lastObject, author_id).then(() => {
              res.redirect("/galvanize_reads/library/books")
          })
      })
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

  router.get('/books/:id/:title/delete', (req, res) => {
    linkQuery.deleteBook(req.params.id).then(() => {
    res.redirect('/galvanize_reads/library/books')
  })
})


// BREAK

router.post('/authors', (req, res) => {
  linkQuery.newAuthor(req.body)
  // console.log(req.body)
    .then(()=>{
      res.redirect("/galvanize_reads/library/authors")
    })
  })

  router.get('/authors/:author_id/:fName/:lName/edit_author', (req, res) => {
    const author_id = req.params.author_id;
    linkQuery.authorInfo(author_id)
      .then((data) => {
        console.log(data);
        res.render('editAuthor', data[0])
    })
})

router.post('/authors/:author_id/:fName/:lName/update', (req, res) => {
  console.log('edit me all night long');
  const authors = {
    fName: req.body.fName,
    lName: req.body.lName,
    biography: req.body.biography,
    portrait: req.body.portrait
  }
    knex('authors')
    .where('author_id', req.params.author_id)
    .update(authors, 'author_id')
    .then(() => {
        res.redirect(`/galvanize_reads/library/authors`)
        })
      })

      // router.post('/books/:book_id/:title/update', (req,res) => {
      //   console.log('edit me all night long');
      //   const books = {
      //     title: req.body.title,
      //     description: req.body.description,
      //     genre: req.body.genre,
      //     coverPic: req.body.coverPic
      //   }
      //     knex('books')
      //     .where('book_id', req.params.book_id)
      //     .update(books, 'book_id')
      //     .then(() => {
      //         res.redirect(`/galvanize_reads/library/books`)
      //         })
      //       })

  router.get('/authors/:id/:fName/:lName/delete', (req, res) => {
    linkQuery.deleteAuthor(req.params.id).then(() => {
    res.redirect('/galvanize_reads/library/authors')
  })
})




module.exports = router
