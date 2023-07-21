const { Sequelize } = require("sequelize");


// create an instance of sequelize
const sequel = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

// Validate and connect to the database
sequel
  .authenticate()
  .then(() => {
    console.log("Successfully connected to the database!");
  })
  .catch((error) => {
    console.log("Failed to connect the database:", error);
  });

module.exports = sequel;
