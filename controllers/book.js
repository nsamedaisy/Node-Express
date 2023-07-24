const Books = require("../models/book");

//books callbacks
let getBooks = async(req, res) => {
  await Books.findAll()
  .then((resp) => {
    console.log(resp);
    return res.json(resp);
  })
  .catch((error) => {
    console.error("An error occured:", error);
    return res.send("An error occured").status(500);
  });
};

let getBooksById = async (req, res) => {
 await Books.findAll({
  where: {
    id: req.params.id
  }
 }).then(() => {
  console.log("Books with id " + req.params.id + "has been successfully selected")
  res.send("One book selected")
 }).catch((error) => {
  console.log("An error was dictated", error)
  return res.send("An error was dictated").status(404)
 })
};

let deleteBooks = async (req, res) => {
  await Books.destroy({
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

let createBooks = async (req, res) => {
  let book = req.body.book;
  Books.create(book)
    .then(() => {
      res.send("Book created");
    })
    .catch((error) => {
      console.log("error occured", error);
      return res.send("unable to create");
    });
};

let updateBooks = async (req, res) => {
  let book = req.body.book;
  await Books.update(book, { where: { id: req.params.id } })
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
  getBooks,
  getBooksById,
  deleteBooks,
  createBooks,
  updateBooks,
};
