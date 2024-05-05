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
    flightDestIATA: "",
    flightDestICAO: "",
    flightArrivalIATA: "",
    flightArrivalICAO: "",
    fliAircraft: "",
    fliDelay: 0,
    flightDuration:""
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
      flightAirline: preFlightData.flightAirline,
      flightDestIATA:  preFlightData.flightDestIATA,
      flightDestICAO:  preFlightData.flightDestICAO,
      flightArrivalIATA:  preFlightData.flightArrivalIATA,
      flightArrivalICAO:  preFlightData.flightArrivalICAO,
      fliAircraft:  preFlightData.fliAircraft,
      fliDelay:  preFlightData.fliDelay,
      flightDuration: preFlightData.flightDuration
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
            Czas lotu:{" "}
            <input
              type="text"
              name="flightDuration"
              placeholder="e.g. 2:45"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightDuration: e.target.value })
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
            Rejestracja samolotu{" "}
            <input
              type="text"
              name="fliAircraft"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, fliAircraft: e.target.value })
              }
            />
             <br />
            Jakie opóźnienie?{" "}
            <input
              type="text"
              name="fliDelay"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, fliDelay: e.target.value })
              }
            />
            <br />
            <br />
            <br />
            Kod ICAO lotniska odlotu {" "}
            <input
              type="text"
              size="4"
              name="flightDestICAO"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightDestICAO: e.target.value })
              }
            />
            <br />

            Kod IATA lotniska odlotu {" "}
            <input
              type="text"
              size="4"
              name="flightDestIATA"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightDestIATA: e.target.value })
              }
            />
            <br />
            Kod ICAO lotniska docelowego {" "}
            <input
              type="text"
              size="4"
              name="flightArrivalICAO"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightArrivalICAO: e.target.value })
              }
            />
            <br />
            Kod IATA lotniska docelowego {" "}
            <input
              type="text"
              size="4"
              name="flightArrivalIATA"
              onChange={(e) =>
                setPreFlightData({ ...preFlightData, flightArrivalIATA: e.target.value })
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
