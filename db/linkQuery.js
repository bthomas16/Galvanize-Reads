const knex = require('./knex')

function bookInfo(book_id) {
  return knex('books')
    .where('book_id', book_id)
}

function authorInfo(author_id) {
  return knex('authors')
    .where('author_id', author_id)
}

function newBook(body){
  console.log(body);
  console.log('bitches');
  return knex('books').insert({
    title: body.title,
    genre: body.genre,
    description: body.description,
    coverPic: body.coverPic
  })
}

function newBook(body){
  console.log(body);
  console.log('bitches');
  return knex('authors').insert({
    fName:body.fName,
    lName:body.lName,
    biography:body.biography,
    portrait:body.portrait
  })
}

function updateBook() {
  return knex('books').where('book_id', book_id).update({
    'title': body.title,
    'genre': body.genre,
    'description': body.description,
    'coverPic': body.coverPic
  })
}

function updateAuthor() {
  return knex('authors').where('author_id', author_id).update({
    'fName': body.fName,
    'lName': body.lName,
    'biography': body.biography,
    'portrait': body.portrait
  })
}

function deleteBook(book_id) {
  return knex('books').where(
  'book_id', book_id).del()
}

function deleteAuthor(author_id) {
  return knex('authors').where(
  'author_id', author_id).del()
}

module.exports = {
  bookInfo,
  authorInfo,
  newBook,
  updateBook,
  deleteBook,
  deleteAuthor
}


// <form class="bookForm" action="/galvanize_reads/library/books" method="post">
//   <label for="title"></label>
//   <input type="text" class="newBookTitle" name="title" value="">
//   <label for="genre"></label>
//   <input type="text" class="newBookGenre" name="genre" value="">
//   <label for="coverPic">Cover Image URL</label>
//   <input type="text" class="newBookTitle" name="coverPic" value="">
//   <label for="description"></label>
//   <input type="text" class="newBookDescription" name="description" value="">
//   <form class="" action="index.html" method="post">
//     <div class="authorBox"></div>
//     <div class="deleteAuthorBox"></div>
//     {{#select authorss}}
//       <option value="{{fName}}">
//         {{fName}}
//       </option>
//     {{/select}}
//   </form>
//   <button type="button" name="button">Add Book</button>
// </form>
