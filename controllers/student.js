const Student = require("../models/student");
const Cohort = require("../models/cohort");

const getStudents = async (req, res) => {
  await Student.findAll()
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
  await Student.findAll({
    where: {
      id: req.params.id,
    },
    include: {
      model: Cohort,
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
  Student.create(student)
    .then(() => {
      res.send("Successfully added a new student!");
    })
    .catch((error) => {
      console.log("'Failed to synchronize with the database:", error);
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
