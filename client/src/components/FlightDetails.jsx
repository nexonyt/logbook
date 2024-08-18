import React from "react";

function FlightDetails(props) {
  return (
    <div className="border-b-2 border-grey-light py-4 px-2">
      <div className="m-2">
        Szczegóły lotu <b>{props.details.fli_number}:</b><br></br>
        Czas lotu: {props.details.fli_duration}
      </div>
    </div>  
  );
}
export default FlightDetails;