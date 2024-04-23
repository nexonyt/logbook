import { useState, useEffect } from "react";
import axios from "axios";

export default function AddFlight() {
  const [user, setUser] = useState(null);
  const [dataReceived, setDataReceived] = useState(false);
  const [flightData, setFlightData] = useState({
    userID: 0,
    flightNumber: "",
    flightDepature: "",
    flightArrival: "",
    flightAirline: "",
  });

  useEffect(() => {
    if (!user) {
      axios.get("/getuserid").then(({ data }) => {
        setFlightData({ ...flightData, userID: data });
        setUser(data);
        setDataReceived(true);
      });

      // axios.get("/addflightquery").then(({ data }) => {
      // });
    }
  }, []);

  const sendData = () => {
    console.log(flightData);
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
              value={flightData.flightNumber}
              onChange={(e) =>
                setFlightData({ ...flightData, flightNumber: e.target.value })
              }
            />
            <br />
            Data odlotu:{" "}
            <input
              type="datetime-local"
              name="flightDeparture"
              onChange={(e) =>
                setFlightData({ ...flightData, flightDepature: e.target.value })
              }
            />
            <br />
            Data przylotu:{" "}
            <input
              type="datetime-local"
              name="flightArrival"
              onChange={(e) =>
                setFlightData({ ...flightData, flightArrival: e.target.value })
              }
            />
            <br />
            Linia{" "}
            <input
              type="text"
              name="flightAirline"
              onChange={(e) =>
                setFlightData({ ...flightData, flightAirline: e.target.value })
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
