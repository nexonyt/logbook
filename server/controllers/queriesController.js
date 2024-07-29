const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const util = require('util');

const app = express();
app.options('*', cors());

console.log(process.env.DB_HOST);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const query = util.promisify(db.query).bind(db);
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
  const fliSeats = req.body.fliSeats;
  const fliDetails = req.body.fliDetails;

  const SQL = `INSERT INTO flights (user_id,fli_dep_time,fli_arr_time,fli_airline,fli_number,fli_dest_air_iata,fli_dest_air_icao,fli_arr_air_iata,fli_arr_air_icao,fli_aircraft,fli_delay,fli_duration,notes,fli_seat) VALUES (${userID}, "${flightDeparture}", "${flightArrival}","${flightAirline}","${flightNumber}","${flightDestIATA}","${flightDestICAO}","${flightArrivalIATA}","${flightArrivalICAO}","${fliAircraft}","${flightDelay}","${flightDuration}","${fliDetails}","${fliSeats}");`;
  db.query(SQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    res.send("added");
  });
};



const getFlightsDurationSum = (req, res) => {
  const userID = req.body.userID;
  console.log(userID);

  const sumTimeOfFlights = `SELECT CONCAT(FLOOR(SUM(TIME_TO_SEC(fli_duration)) / 3600), 'h ', MOD(FLOOR(SUM(TIME_TO_SEC(fli_duration)) / 60), 60), 'm') AS total_duration FROM flights WHERE user_id = ${userID};`
  const longestFlightSQL = `SELECT DATE_FORMAT(SEC_TO_TIME(MAX(TIME_TO_SEC(fli_duration))), '%H:%i') AS max_duration FROM flights WHERE user_id = ${userID};`;
  const maxDelaySQL = `SELECT fli_number,fli_dest_air_icao,fli_dest_air_iata, fli_arr_air_icao,fli_arr_air_iata, fli_delay,fli_airline AS max_delay  FROM flights WHERE user_id = ${userID} ORDER BY fli_delay DESC LIMIT 1;
  `;

  const mostChosenAirlineSQL = `
  SELECT fli_airline, COUNT(*) AS count 
  FROM flights 
  WHERE user_id = ${userID} 
  GROUP BY fli_airline 
  ORDER BY count DESC 
  LIMIT 1;
`;

const mostFrequentDepartureAirportSQL = `
SELECT fli_dest_air_icao,fli_dest_air_iata  AS count 
FROM flights 
WHERE user_id = ${userID} 
GROUP BY fli_dest_air_icao 
ORDER BY count DESC 
LIMIT 1;
`;

const mostFrequentDestinationAirportSQL = `
SELECT fli_arr_air_icao,fli_arr_air_iata  AS count 
FROM flights 
WHERE user_id = ${userID} 
GROUP BY fli_dest_air_icao 
ORDER BY count DESC 
LIMIT 1;
`;

const airlineWithLeastDelaySQL = `
SELECT fli_airline, AVG(fli_delay) AS avg_delay 
FROM flights 
WHERE user_id = ${userID} 
GROUP BY fli_airline 
ORDER BY avg_delay ASC 
LIMIT 1;
`;
  let responsesFromDB = {};
  let queriesRemaining = 7; // Number of queries

  const onQueryComplete = () => {
    queriesRemaining--;
    if (queriesRemaining === 0) {
      // All queries are done, send the response
      res.json(responsesFromDB);
    }
  };

  // Execute the first query
  db.query(longestFlightSQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.status(500).send('Error retrieving flight data');
      return;
    }
    responsesFromDB["longest_flight"] = result;
    onQueryComplete();
  });

  // Execute the second query
  db.query(maxDelaySQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.status(500).send('Error retrieving flight data');
      return;
    }
    responsesFromDB["max_delay"] = result ? result : null;
    onQueryComplete();
  });

  db.query(mostChosenAirlineSQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.status(500).send('Error retrieving flight data');
      return;
    }
    responsesFromDB["most_chosen_airline"] = result ? result : null;
    onQueryComplete();
  });

  db.query(mostFrequentDepartureAirportSQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.status(500).send('Error retrieving flight data');
      return;
    }
    responsesFromDB["most_frequent_departure_airport"] = result ? result : null;
    onQueryComplete();
  });

  db.query(airlineWithLeastDelaySQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.status(500).send('Error retrieving flight data');
      return;
    }
    responsesFromDB["least_delay_airline"] = result ? result : null;
    onQueryComplete();
  });

  db.query(mostFrequentDestinationAirportSQL, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.status(500).send('Error retrieving flight data');
      return;
    }
    responsesFromDB["most_frequent_destination"] = result ? result : null;
    onQueryComplete();
  });

  db.query(sumTimeOfFlights, (err, result) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      res.status(500).send('Error retrieving flight data');
      return;
    }
    responsesFromDB["sum_time_of_flights"] = result ? result : null;
    onQueryComplete();
  });
};



module.exports = { addFlightQuery, getFlightsDurationSum };
