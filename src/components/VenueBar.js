import React, { useState } from "react";

const VenueBar = ({ venues, onUpdateVenue, selectedVenue }) => {
  const [stateSelectedVenue, setStateSelectedVenue] = useState(venues[0]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onUpdateVenue(stateSelectedVenue);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    let selectedVenue = venues[event.target.value];
    console.log(selectedVenue);
    setStateSelectedVenue(selectedVenue);
  };

  const selectOptions = venues.map((venue, index) => {
    return (
      <option key={index} value={index}>
        {venue.name}
      </option>
    );
  });
  return (
    <>
      {selectedVenue !== null ? (
        <h3 className="venue-welcome">Welcome {selectedVenue.name}!</h3>
      ) : (
        <h3>Welcome, please select a venue</h3>
      )}
      <form onSubmit={handleFormSubmit}>
        <label>
          Choose your Venue:
          <select onChange={handleChange}>{selectOptions}</select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default VenueBar;