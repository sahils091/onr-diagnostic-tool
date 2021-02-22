import React from "react";
import Graph from "../../Graph/Graph";

import "./areachart.scss";
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
      <Graph />
      <div></div>
    </div>
  );
};

export default Areachart;
