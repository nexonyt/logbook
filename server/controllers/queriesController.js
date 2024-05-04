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


  const userID = req.body.userID;
  const flightNumber = req.body.flightNumber;
  const flightDeparture = req.body.flightDeparture;
  const flightArrival = req.body.flightArrival;
  const flightAirline = req.body.flightAirline;
  
   const SQL = `INSERT INTO flights (user_id,fli_dep_time_real,fli_arr_real,fli_airline,fli_number) VALUES (${userID}, "${flightDeparture}", "${flightArrival}","${flightAirline}","${flightNumber}");`;
   db.query(SQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    res.send("added");
   });
};

module.exports = { addFlightQuery };
