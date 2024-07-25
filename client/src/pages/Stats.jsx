import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom'

export default function Stats() {
    const [flightDurationSum, setFlightDurationSum] = useState(null);
    const [userID,setUserID] = useState(null)
    useEffect(() => {
        if (!userID) {
          axios.get("/getuserid").then(({ data }) => {
            setUserID(data);
          });
        }
      }, []);


    const sendData = () => {
        const dataToSend = {'userID':userID}
        axios.post("/getflightdurationsum",dataToSend).then((response) => {
            console.log(response.data[0].total_duration);
            setFlightDurationSum(response.data[0].total_duration);
        });
    };



    return (
        <>
            <p>Staty</p>
            <button
                onClick={() => sendData()}
                className="inline-block my-12 rounded bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
              >
                Wyślij dane
              </button>
              <br/>

              <br/>
              <br/>
              
              {flightDurationSum && (
                <div>
                    <p>Łączny czas lotów: {flightDurationSum}</p>
                </div>
            )}
        </>
    );
}
