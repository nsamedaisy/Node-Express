const Book = require("../models/book");
const Student = require("../models/student");

//books callbacks
let getBook = async (req, res) => {
  await Book.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occured:", error);
      return res.send("An error occured").status(500);
    });
};

let getBookById = async (req, res) => {
  await Book.findAll({
    where: {
      id: req.params.id,
    },
    include: {
      model: Student,
    },
  })
    .then(() => {
      console.log(
        "Books with id " + req.params.id + "has been successfully selected"
      );
      res.send("One book selected");
    })
    .catch((error) => {
      console.log("An error was dictated", error);
      return res.send("An error was dictated").status(404);
    });
};

let deleteBook = async (req, res) => {
  await Book.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      console.log(
        "Books with id " + req.params.id + "has been succesfully deleted"
      );
      res.send("Deleted one Book!");
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

let createBook = async (req, res) => {
  let book = req.body.book;
  Book.create(book)
    .then(() => {
      res.send("Book created");
    })
    .catch((error) => {
      console.log("error occured", error);
      return res.send("unable to create");
    });
};

let updateBook = async (req, res) => {
  let book = req.body.book;
  await Book.update(book, { where: { id: req.params.id } })
    .then((resp) => {
      console.log("Book  Updated", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

module.exports = {
  getBook,
  getBookById,
  deleteBook,
  createBook,
  updateBook,
};
