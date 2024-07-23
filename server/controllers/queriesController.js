const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

console.log(process.env.DB_HOST);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const addFlightQuery = (req, res) => {
  console.log(req.body);
  res.json("ok");

  const userID = req.body.userID;
  const flightNumber = req.body.flightNumber;
  const flightDeparture = req.body.flightDeparture;
  // console.log(flightDeparture)
  const flightArrival = req.body.flightArrival;
  const flightAirline = req.body.flightAirline;

  const SQL = `INSERT INTO flights (user_id,fli_airline,fli_number) VALUES (${userID},"${flightAirline}","${flightNumber}");`;
  db.query(SQL, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = { addFlightQuery };
