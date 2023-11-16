import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

import '../styles/ForecastSummaries.css';

const ForecastSummaries = ({forecasts}) => {

  return (
  <div className="forecast-summaries">
    {forecasts.map((forecast, index) => (
      <ForecastSummary
      key={index}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature}
      />
    ))}
  </div>
  );
    };

export default ForecastSummaries;

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.number.isRequired,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};

