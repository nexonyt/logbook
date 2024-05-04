import { useState, useEffect } from "react";
import axios from "axios";

export default function AddFlight() {
  const [user, setUser] = useState(null);
  const [dataReceived, setDataReceived] = useState(false);
  const [preFlightData, setPreFlightData] = useState({
    userID: 0,
    flightNumber: "",
    flightDateDeparture: "",
    flightTimeDeparture: "",
    flightDateArrival: "",
    flightTimeArrival: "",
    flightAirline: "",
  });



  useEffect(() => {
    if (!user) {
      axios.get("/getuserid").then(({ data }) => {
        setPreFlightData({ ...preFlightData, userID: data });
        setUser(data);
        setDataReceived(true);
      });
    }
  }, []);
  let flightNumber = "";
  let flightDeparture = "";
  const sendData = () => {
    const flightData = {
      userID: preFlightData.userID,
      flightNumber: preFlightData.flightNumber,
      flightDeparture: preFlightData.flightDateDeparture + ' ' + preFlightData.flightTimeDeparture + ":00",
      flightArrival: preFlightData.flightDateArrival + ' ' + preFlightData.flightTimeArrival + ":00",
      flightAirline: preFlightData.flightAirline
    };
    console.log(flightData);
    axios.post("/addflightquery", flightData).then((response) => {
      console.log(response.data)
    });
  };
  return (
    <>
      {dataReceived == false ? (
        <div></div>
      ) : (
        <div>
          <div>Dodaj lot dla usera o id: {user}!</div>
          <div className="dodanielotu">
            Numer lotu:{" "}
            <input
              type="text"
              name="flightNumber"
              value={preFlightData.flightNumber}
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightNumber: e.target.value })
              }
            />
            <br />
            Data odlotu:{" "}
            <input
              type="text"
              name="flightDateDeparture"
              placeholder="e.g. 2024-10-04"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightDateDeparture: e.target.value })
              }
            />
            <br />
            Data przylotu:{" "}
            <input
              type="text"
              name="flightDateArrival"
              placeholder="e.g. 2024-10-10"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightDateArrival: e.target.value })
              }
            />
            <br />
            Godzina odlotu:{" "}
            <input
              type="text"
              name="flightTimeDeparture"
              placeholder="e.g. 10:00"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightTimeDeparture: e.target.value })
              }
            />
            <br />
            Godzina przylotu:{" "}
            <input
              type="text"
              name="flightTimeArrival"
              placeholder="e.g. 14:00"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightTimeArrival: e.target.value })
              }
            />
            <br />
            Linia{" "}
            <input
              type="text"
              name="flightAirline"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightAirline: e.target.value })
              }
            />
            <br />
            Kod ICAO lotniska docelowego {" "}
            <input
              type="text"
              name="flightAirline"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightAirline: e.target.value })
              }
            />
            <br />
            <button onClick={() => sendData()}>Wyślij dane</button>
          </div>
        </div>
      )}
    </>
  );
}
