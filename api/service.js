const db = require("../config/database");
// const date = new Date();
// console.log(date);

module.exports = {
  user: (data, callBack) => {
    db.query(
      `insert into auth(name,email,password,status)values(?,?,?,?)`,
      [data.name, data.email, data.password, data.status],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  create: (data, callBack) => {
    db.query(
      `insert into enquires(name,email,contact,state,city,company,designation,website,residences_options,commercial_options,hospitality_options,message,created_at)values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.name,
        data.email,
        data.contact,
        data.state,
        data.city,
        data.company,
        data.designation,
        data.website,
        data.residences_options,
        data.commercial_options,
        data.hospitality_options,
        data.message,
        data.created_at,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getmeta: (callBack) => {
    db.query(`SELECT * FROM meta_content`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },

  getUserByUserEmail: (email, callBack) => {
    db.query(
      `SELECT * FROM auth where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
