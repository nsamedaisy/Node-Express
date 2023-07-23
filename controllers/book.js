const Books = require("../models/book");
const Cohort = require("../models/cohort");


//books callbacks
let getBooks = (req, res) => {
  res.json(Books);
};

let getBooksById = (req, res) => {
  let { id } = req.params;
  let BookId = Books.filter((Book) => {
    return Book.id == id;
  });
  res.json(BookId);
};

let deleteBooks = (req, res) => {
  let { id } = req.params;
  let Book = Books.filter((Book) => {
    return Book.id != id;
  });
  res.json(Book);
};

let createBooks = (req, res) => {
  let newBook = {
    id: Date.parse(new Date()),
    ...req.body,
  };
  Books.push(newBook);
  res.json(Books);
};

let updateBooks = (req, res) => {
  requestId = 1;
  let Book = Books.find((Book) => Book.id == requestId);
  Book.title = req.body.title;
  Book.author = req.body.author;
  Book.date = req.body.date;

  Book = Books.filter((Book) => {});
  res.json(Books);
};

module.exports = {
  getBooks,
  getBooksById,
  deleteBooks,
  createBooks,
  updateBooks,
};
