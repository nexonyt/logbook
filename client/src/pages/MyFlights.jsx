import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import {useNavigate} from 'react-router-dom'

export default function MyFlights() {

const [stats, setStats] = useState(null);
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
          setStats(response.data)
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
        <div className="bg-gray-600">Moje loty</div>
        </>
    )
}