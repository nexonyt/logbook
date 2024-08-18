import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom'

export default function MyFlights() {
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Miesiące są 0-indeksowane
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};


const [flights, setFlights] = useState(null);
  const [userID, setUserID] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Pobierz userID
    const fetchUserID = async () => {
      try {
        const response = await axios.get("/getuserid");
        setUserID(response.data);
      } catch (error) {
        console.error("Error fetching user ID:", error);
        toast.error("Error fetching user ID");
      }
    };

    fetchUserID();
  }, []);

  useEffect(() => {
    // Funkcja do wysyłania danych
    const sendData = async () => {
      if (userID) {
        const dataToSend = { userID };
        try {
          const response = await axios.post("/getAllFlights", dataToSend);
          setShow(true)
          setFlights(response.data)
        } catch (error) {

          console.error("Error sending data:", error);
          toast.error("Error sending data");

        }
      }
    };

    sendData();
  }, [userID]); // Wywołaj sendData, gdy userID się zmieni
    return (
      <>
        <div className="flex flex-col justify-center items-center w-full animate-in fade-in duration-700">
          <div className="text-[#131218] font-bold m-8">Moje loty</div>
          {show ? (
            <div className="animate-in fade-in duration-700 text-[#131218] w-full p-4">
              <table className="w-full table-auto">
                <tr className="h-14 bg-[#131218] text-white">
                  <th className="w-2 rounded-tl-lg min-h-60">Data lotu</th>
                  <th className="w-4">Numer lotu</th>
                  <th className="w-4">Trasa lotu</th>
                  <th className="w-4">Czas lotu</th>
                  <th className="w-32">Samolot</th>
                  <th className="w-6">Linia lotnicza</th>
                  <th className="rounded-tr-lg w-12 min-h-60">Akcje</th>
                </tr>
                {flights.map((data, index) => (
                  <tbody>
                    <tr key={index} className={"row" + index}>
                    <td className="bg-grey-light border-b-2 border-grey-light p-4 text-center">
                        {formatDate(data.fli_dep_time)}
                      </td>
                      <td className="bg-grey-light border-b-2 border-grey-light p-4 text-center">
                        {data.fli_number}
                      </td>
                      <td className="bg-grey-light border-b-2 border-grey-light p-4 text-center">
                        <b>
                          {data.fli_dest_air_iata} - {data.fli_arr_air_iata}
                        </b>
                      </td>
                      <td className="bg-grey-light border-b-2 border-grey-light p-4 text-center">
                        {data.fli_duration}
                      </td>
                      <td className="bg-grey-light border-b-2 border-grey-light p-4 text-center">
                        {data.fli_aircraft_type}
                      </td>
                      <td className="bg-grey-light border-b-2 border-grey-light p-4 text-center">
                        {data.fli_airline}
                      </td>

                      <td className="bg-grey-light border-b-2 border-grey-light p-4 text-center">
                        <button
                          className="h-8 w-32 mx-2 bg-green-500 text-white rounded-md"
                          //onClick={() => handleDetails(index)}
                        >
                          Szczegóły lotu
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          ) : (
            <div className="animate-out fade-out duration-300 delay-200">
              <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                <svg
                  class="w-16 h-16 animate-spin text-gray-00"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-[#131218]"
                  ></path>
                </svg>
              </div>
            </div>
          )}
        </div>
      </>
    );
}