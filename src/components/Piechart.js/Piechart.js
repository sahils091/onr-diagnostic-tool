import React from "react";
import Donut from "../Donut/Donut";
import "./piechart.scss";

const Piechart = () => {
  return (
    <div className="piechart">
      <div className="piechart__filter">
        <h4 className="piechart__filter-title">Filters</h4>
        <div className=" piechart__filter-detail">
          <div className="piechart__blurb-wrapper">
            <p className="piechart__filter-key"></p>
            <p className="piechart__filter-blurb">
              All CQA Results
              <span className="piechart__filter-icon">
                <i className="fas fa-info-circle"></i>
              </span>
            </p>
          </div>
          <div className="piechart__blurb-wrapper">
            <span className="piechart__filter-key piechart__filter-key--two"></span>
            <p className="piechart__filter-blurb">
              CQAs with Closed Loop{" "}
              <span className="piechart__filter-icon">
                <i className="fas fa-info-circle"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <Donut />
    </div>
  );
};

export default Piechart;
