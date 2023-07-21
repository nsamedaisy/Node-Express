const { DataTypes } = require("sequelize");
const sequel = require("../db");

const Cohort = sequel.define('cohorts', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  starting_month: {
    type: DataTypes.STRING,
  },
  starting_year: {
    type: DataTypes.STRING,
  }
})

sequel
  .sync()
  .then(() => {
    console.log("cohort table created successfully");
  })
  .catch((error) => {
    console.log("An error occured", error);
  });

module.exports = Cohort;
