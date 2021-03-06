import React from "react";
import "./areachart.scss";
import Graph from "../Graph/Graph";

const Areachart = () => {
  return (
    <div className="areachart">
      <div className="areachart__wrapper">
        <div className="areachart__title-wrapper">
          <h2 className="areachart__title">QUALITY SCORE TREND</h2>
        </div>
        <div className="areachart__btn-wrapper">
          <button className="areachart__btn areachart__btn--day">Day</button>
          <button className="areachart__btn">Week</button>
          <button className="areachart__btn areachart__btn--month">
            Month
          </button>
          <button className="areachart__btn">Quarter</button>
          <button className="areachart__btn">Half</button>
          <button className="areachart__btn">Year</button>
        </div>
      </div>
      <div className="areachart__graph-wrapper">
        <Graph />
      </div>
    </div>
  );
};

export default Areachart;
