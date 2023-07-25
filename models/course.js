const { DataTypes } = require("sequelize");
const sequel = require("../db");

const Course = sequel.define("courses", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tutor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coefficient: {
    type: DataTypes.INTEGER,
  },
});

sequel
  .sync()
  .then(() => {
    console.log("Courses has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = Course;
