const Course = require("../models/course");
const Student = require("../models/student");

const getCourses = async (req, res) => {
  await Course.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("Failed to retrieve data : ", error);
      res.send("Failed to retrieve data").status(500);
    });
};

const getCourse = async (req, res) => {
  await Course.findAll("courses", {
    where: {
      id: req.params.id,
    },
    include: {
        model: Student,
      },
  })
    .then((resp) => {
      console.log("Course:", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("Failed to retrieve data:", error);
      res.send("Failed to retrieve data").status(404);
    });
};

const deleteCourse = async (req, res) => {
  await Course.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "Course with id" + req.params.id + "has been successfully deleted"
      );
      res.send("Delete successful").status(404);
    })
    .catch((error) => {
      console.log("Failed to delete:", error);
    });
};

const createCourse = async (req, res) => {
  let course = req.body.course;
  Course.create(course, {
  })
    .then(() => {
      res.send("Successfully added a new course!");
    })
    .catch((error) => {
      console.log("Failed to synchronize with the database:", error);
      res.send("An error occured").status(400);
    });
};

const updateCourse = async (req, res) => {
  let course = req.body.course;
  await Course.update(course, {
    where: {
      id: req.params.id,
    },
  })
    .then((resp) => {
      console.log("Course:", resp);
      res.json(resp);
    })
    .catch((error) => {
      console.log("Failed to update a Course:", error);
      res.send("Update Failed").status(404);
    });
};

module.exports = {
  getCourses,
  getCourse,
  deleteCourse,
  createCourse,
  updateCourse,
};
