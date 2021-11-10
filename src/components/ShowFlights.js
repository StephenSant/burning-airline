import React from 'react';

const ShowFlights = (props) => {
  return (
    <div>
      {props.flights.map((f) => <p key={f.id}>{f.origin}{f.destination}</p>)}
    </div>
  );
};

export default ShowFlights;
