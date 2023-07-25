const Student = require("../models/student");
// const Cohort = require("../models/cohort");
const Book = require("../models/book");
const Course = require("../models/course");
const { Op, Sequelize } = require("sequelize");

const getStudents = async (req, res) => {
  let page = req.query.page ? req.query.page : 0;
  let limit = req.query.limit ? req.query.limit : 5;
  await Student.findAll({
    // utility functions i can use to models e.g min, max,decrement, increment
    //virtual fields on sequelize
    group: "score",
    order: [
      ["score", "DESC"],
      Sequelize.fn("MAX", Sequelize.col("score")) //sorting by maximum score in descending order. note its ascending by default
    ],
    limit, //gives the limit of database data like at 10 it continues to the next page(Partitions)
    offset: page * limit, //offset denotes

    // attributes: ["name", "email", "phone", "level", "sex"], // with attributes you include or excludes the data u want or that which u dont want

    // where: {
    //   [Op.and]: [
    //     //it specifies that the query should return only records where the "id" column matches the value of "req.params.id" AND the "sex" column is "female". (array of options to select from)
    //     { id: req.params.id },
    //     { sex: "female" },
    //   ],
    // },
    // include: {
    //   model: Book,
    // },
    // include: {
    //   model: Course,
    // },
  })
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("A error occured:", error);
      return res.send("an error occured:").status(500);
    });
};

const getStudent = async (req, res) => {
  await Student.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((resp) => {
      console.log("student:", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured:", error);
      return res.send("An error occured:").status(404);
    });
};

const delStudent = async (req, res) => {
  await Student.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "Student with id " + req.params.id + "has been successfully deleted"
      );
      res.send("Deleted One student!");
    })
    .catch((error) => {
      console.log("An error occured:", error);
      return res.send("An error occured:").status(404);
    });
};

const createStudent = async (req, res) => {
  let student = req.body.student;
  Student.create(student, {
    include: {
      model: Course,
    },
  })
    .then(() => {
      res.send("Successfully added a new student!");
    })
    .catch((error) => {
      console.log("Failed to synchronize with the database:", error);
      res.send("An error occured").status(400);
    });
};

const updateStudent = async (req, res) => {
  let student = req.body.student;
  await Student.update(student, { where: { id: req.params.id } })
    .then((resp) => {
      console.log("Student:", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

module.exports = {
  getStudent,
  getStudents,
  delStudent,
  createStudent,
  updateStudent,
};
