const Cohort = require("../models/cohort");

// cohort callbacks
const getCohorts = async (req, res) => {
  await Cohort.findAll()
    .then((resp) => {
      console.log(resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(500);
    });
};

const getCohort = async (req, res) => {
  await Cohort.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then((resp) => {
      console.log("Cohort", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

const delCohort = async (req, res) => {
  await Cohort.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      console.log(
        "Cohort with id" + req.params.id + "have been successfully deleted"
      );
      return res.send("ok");
    })
    .catch((error) => {
      console.log("An error occured", error);
      return res.send("An error occured").status(404);
    });
};

const createCohort = async (req, res) => {
  let cohort = req.body.cohort;
  Cohort.create(cohort)
    .then(() => {
      console.log();
      res.send("ok");
    })
    .catch((error) => {
      console.log("An error occuredd:", error);
      res.send("An error occured").status(404);
    });
};

const updateCohort = async (req, res) => {
  let cohort = req.body.cohort;
  await Cohort.update(cohort, {
    where: { id: req.params.Id },
  })
    .then((resp) => {
      console.log("cohort", resp);
      return res.json(resp);
    })
    .catch((error) => {
      console.error("An error occured:", error);
      res.send("An error occured").status(404);
    });
};

module.exports = {
  getCohort,
  getCohorts,
  delCohort,
  createCohort,
  updateCohort,
};
