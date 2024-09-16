const { db } = require("../config/database");
const { create, getmeta, user } = require("./service");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    user(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: "error",
          message: "Database connection error !!",
        });
      }
      return res.status(200).json({
        status: "success",
        data: results
      });
    });
  },

  createEnquiry: (req, res) => {
    const body = req.body;

    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: "error",
          message: "Database connection error !!",
        });
      }
      return res.status(200).json({
        status: "success",
        data: results,
      });
    });
  },
  getmeta: (req, res) => {
    getmeta((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: "error",
          message: "Database connection error !!",
        });
      }
      return res.status(200).json({
        status: "success",
        data: results,
      });
    });
  },
};
