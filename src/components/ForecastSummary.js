import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = ({ date, description, icon, temperature }) => {
  return (
    <div className="forecast-summary">
      <div className="forecast-summary_date">{date}</div>
      <div className="forecast-summary_description">{description}</div>
      <div className="forecast-summary_icon">{icon}</div>
      <div className="forecast_summary_temperature">{temperature.max}</div>
      <div className="forecast-summary_icon" data-testId="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary_date">
        {moment(date).format("ddd Do MMM")}
      </div>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
export default ForecastSummary;
