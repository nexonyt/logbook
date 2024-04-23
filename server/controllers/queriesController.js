const express = require('express')
const mysql = require('mysql')
const cors = require('cors');

const app = express();
app.use(cors())

console.log(process.env.DB_HOST)

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})


const addFlightQuery = (req,res) => {
    db.query(
        "SELECT * FROM `flights`",
        (err, result) => {
          if (err) {
            throw (err);
          }
          res.json(result);
        }
      );
}

module.exports = { addFlightQuery };