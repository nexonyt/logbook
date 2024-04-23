import { useState, useEffect } from "react";
import axios from "axios";

export default function AddFlight() {
  const [user, setUser] = useState(null);
  const [dataReceived, setDataReceived] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get("/getuserid").then(({ data }) => {
        setUser(data);
        setDataReceived(true);
      });

      axios.get("/addflightquery").then(({data}) => {
        console.log(data);
      })

    }
  }, []);


  console.log(dataReceived);
  return (
    <>
      {dataReceived == false ? (
        <div></div>
      ) : (
        <div>Dodaj lot dla usera o id: {user}!</div>
      )}
    </>
  );
}
