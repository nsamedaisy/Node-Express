const { DataTypes } = require("sequelize");
const sequel = require("../db");
const Cohort = require("../models/cohort");
const Book = require("../models/book");
const Course = require("../models/course");

// Define Student Model and identification Model
const Student = sequel.define("student", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.ENUM("1st", "2nd"),
  },
  cohortId: {
    type: DataTypes.UUID,
  },
  dob: {
    type: DataTypes.DATEONLY,
  },
  street: {
    type: DataTypes.STRING,
  },
  town: {
    type: DataTypes.STRING,
  },
  region: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  sex: {
    type: DataTypes.ENUM("female", "male"),
  },
  score: {
    type: DataTypes.INTEGER,
  },
});

// creating association using sequelize
Student.belongsTo(Cohort);
Cohort.hasMany(Student);

// creating a many to many relationship
// the StudentBooks manages the relationship between student and book
const StudentBooks = sequel.define("student_books", {}, { timestamps: false });
Student.belongsToMany(Book, { through: StudentBooks });
Book.belongsToMany(Student, { through: StudentBooks });

// relationship between students and the courses
const StudentCourses = sequel.define(
  "student_courses",
  {},
  { timestamps: false }
);
Student.belongsToMany(Course, { through: StudentCourses });
Course.belongsToMany(Student, { through: StudentCourses });

sequel
  .sync()
  .then(() => {
    console.log("student table created successfully");
  })
  .catch((error) => {
    console.log("An error occured:", error);
  });

module.exports = Student;
