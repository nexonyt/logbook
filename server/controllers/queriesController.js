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
  // console.log(flightDeparture)
  const flightArrival = req.body.flightArrival;
  const flightAirline = req.body.flightAirline;
  const flightDestIATA = req.body.flightDestIATA;
  const flightDestICAO = req.body.flightDestICAO;
  const flightArrivalIATA = req.body.flightArrivalIATA;
  const flightArrivalICAO = req.body.flightArrivalICAO;
  const fliAircraft = req.body.fliAircraft;
  const flightDelay = req.body.fliDelay;
  const flightDuration = req.body.flightDuration;

   const SQL = `INSERT INTO flights (user_id,fli_dep_time,fli_arr_time,fli_airline,fli_number,fli_dest_air_iata,fli_dest_air_icao,fli_arr_air_iata,fli_arr_air_icao,fli_aircraft,fli_delay,fli_duration) VALUES (${userID}, "${flightDeparture}", "${flightArrival}","${flightAirline}","${flightNumber}","${flightDestIATA}","${flightDestICAO}","${flightArrivalIATA}","${flightArrivalICAO}","${fliAircraft}","${flightDelay}","${flightDuration}");`;
   db.query(SQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    res.send("added");
   });
};

module.exports = { addFlightQuery };
