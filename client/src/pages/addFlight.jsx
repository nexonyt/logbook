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
    flightDuration: "",
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
      flightDeparture:
        preFlightData.flightDateDeparture +
        " " +
        preFlightData.flightTimeDeparture +
        ":00",
      flightArrival:
        preFlightData.flightDateArrival +
        " " +
        preFlightData.flightTimeArrival +
        ":00",
      flightAirline: preFlightData.flightAirline,
      flightDestIATA: preFlightData.flightDestIATA,
      flightDestICAO: preFlightData.flightDestICAO,
      flightArrivalIATA: preFlightData.flightArrivalIATA,
      flightArrivalICAO: preFlightData.flightArrivalICAO,
      fliAircraft: preFlightData.fliAircraft,
      fliDelay: preFlightData.fliDelay,
      flightDuration: preFlightData.flightDuration,
    };
    console.log(flightData);
    axios.post("/addflightquery", flightData).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <>
      {dataReceived == false ? (
        <div></div>
      ) : (
        <div>
          <div>Dodaj lot dla usera o id: {user}!</div>
          <div className="flex flex-col justify-center items-center m-12">
          <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                    for="grid-first-name"
                  >
                    Numer lotu
                  </label>
            <input
              type="text"
              name="flightNumber"
              placeholder="FR 5792"
              className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={preFlightData.flightNumber}
              onChange={(e) =>
                setPreFlightData({
                  ...preFlightData,
                  flightNumber: e.target.value,
                })
              }
            />
            {/* Dane odnośnie godziny i daty */}
            <div className="my-12">
              <div name="DepartureAirport" className="flex flex-row gap-5">
                <div>
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                    for="grid-first-name"
                  >
                    Data odlotu
                  </label>
                  <input
                    type="text"
                    name="flightDateDeparture"
                    className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="e.g. 2024-10-04"
                    onChange={(e) =>
                      setPreFlightData({
                        ...preFlightData,
                        flightDateDeparture: e.target.value,
                      })
                    }
                  />

                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                    for="grid-first-name"
                  >
                    Godzina odlotu
                  </label>
                  <input
                    type="text"
                    name="flightTimeDeparture"
                    className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="e.g. 10:00"
                    onChange={(e) =>
                      setPreFlightData({
                        ...preFlightData,
                        flightTimeDeparture: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                    for="grid-first-name"
                  >
                    Data przylotu
                  </label>
                  <input
                    type="text"
                    name="flightDateArrival"
                    placeholder="e.g. 2024-10-10"
                    className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(e) =>
                      setPreFlightData({
                        ...preFlightData,
                        flightDateArrival: e.target.value,
                      })
                    }
                  />

                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                    for="grid-first-name"
                  >
                    Godzina przylotu
                  </label>
                  <input
                    type="text"
                    name="flightTimeArrival"
                    className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="e.g. 14:00"
                    onChange={(e) =>
                      setPreFlightData({
                        ...preFlightData,
                        flightTimeArrival: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div name="DepartureAirport" className="flex flex-row gap-5">
              <div>
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                  for="grid-first-name"
                >
                  Kod ICAO lotniska odlotu
                </label>
                <input
                  type="text"
                  className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="flightDestICAO"
                  placeholder="ICAO"
                  onChange={(e) =>
                    setPreFlightData({
                      ...preFlightData,
                      flightDestICAO: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                  for="grid-first-name"
                >
                  Kod IATA lotniska odlotu
                </label>
                <input
                  type="text"
                  className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="flightDestIATA"
                  placeholder="IATA"
                  onChange={(e) =>
                    setPreFlightData({
                      ...preFlightData,
                      flightDestIATA: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div name="DepartureAirport" className="flex flex-row gap-5 my-6">
              <div>
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                  for="grid-first-name"
                >
                  Kod ICAO lotniska docelowego
                </label>
                <input
                  type="text"
                  placeholder="ICAO"
                  name="flightArrivalICAO"
                  className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={(e) =>
                    setPreFlightData({
                      ...preFlightData,
                      flightArrivalICAO: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                  for="grid-first-name"
                >
                  Kod IATA lotniska docelowego
                </label>
                <input
                  type="text"
                  className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="flightArrivalIATA"
                  placeholder="IATA"
                  onChange={(e) =>
                    setPreFlightData({
                      ...preFlightData,
                      flightArrivalIATA: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div name="AircraftDetails" className="flex flex-row gap-5">
              <div>
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                  for="grid-first-name"
                >
                  Czas lotu{" "}
                </label>
                <input
                  type="text"
                  name="flightDuration"
                  placeholder="e.g. 2:45"
                  className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={(e) =>
                    setPreFlightData({
                      ...preFlightData,
                      flightDuration: e.target.value,
                    })
                  }
                />
                {/* kom */}
              </div>
              <div>
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                  for="grid-first-name"
                >
                  Jakie opóźnienie?
                </label>
                <input
                  type="text"
                  name="fliDelay"
                  className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={(e) =>
                    setPreFlightData({
                      ...preFlightData,
                      fliDelay: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            {/* Dane odnośnie samolotu i linii  */}
            <div className="my-12">
              <div name="AircraftDetails" className="flex flex-row gap-5">
                <div>
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                    for="grid-first-name"
                  >
                    Linia lotnicza
                  </label>
                  <input
                    type="text"
                    name="flightAirline"
                    placeholder="np. Enter Air"
                    className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(e) =>
                      setPreFlightData({
                        ...preFlightData,
                        flightAirline: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label
                    class="block uppercase tracking-wide text-white text-xs font-bold mb-1"
                    for="grid-first-name"
                  >
                    Rejestracja samolotu
                  </label>
                  <input
                    type="text"
                    name="fliAircraft"
                    placeholder="np. SP-EXA"
                    className="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(e) =>
                      setPreFlightData({
                        ...preFlightData,
                        fliAircraft: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            {/* <input class="appearance-none block w-34 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/> */}{" "}
            
            <div className="flex justify-center items-center">
              <button
                onClick={() => sendData()}
                className="inline-block my-12 rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
              >
                Wyślij dane
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
