import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

import '../styles/App.css';



const App = (props) => {
  const { location, forecasts } = props;
  console.log (forecasts);
  return (
    <div className="forecast">
    <LocationDetails city={location.city} country={location.country} />
    <ForecastSummaries forecasts={forecasts} />
  </div>
  );
  };

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
