const { createPool } = require("mysql");
const constant = require("./constant.json");
const pool = createPool({
  host: constant.DB_HOST,
  user: constant.DB_USER,
  password: constant.DB_PASSWORD,
  port: constant.DB_PORT,
  database: constant.DB_DATABASE,
});

pool.getConnection((err) => {
  if (err) {
    console.log("Error conntecting to db...");
  }
  console.log("Connected to db...");
});

const executeQuery = (query, arraParms) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arraParms, (err, data) => {
        if (err) {
          console.log("error in executing the query");
          reject(err);
        }
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
