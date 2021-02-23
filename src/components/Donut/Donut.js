import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./donut.scss";
import uuid from "react-uuid";
import { Link } from "react-router-dom";

const Donut = () => {
  const [gaugeData] = useState([
    {
      name: "Quality Score",
      score: 72,
      vsly: null,
      sample: 133,
    },
    {
      name: "Basics",
      score: 71,
      vsly: null,
      sample: 133,
    },
    {
      name: "Interaction",
      score: 68,
      vsly: null,
      sample: 133,
    },
    {
      name: "Expertise",
      score: 70,
      vsly: null,
      sample: 133,
    },
    {
      name: "Process",
      score: 75,
      vsly: null,
      sample: 133,
    },
    {
      name: "Knowledge",
      score: 76,
      vsly: null,
      sample: 133,
    },
  ]);

  return (
    <div className="donut">
      {gaugeData.map((i) => {
        return (
          <Link to={"/" + i.name} key={uuid()} className="donut__link">
            <div className="donut__chart-wrapper" key={uuid()}>
              <p className="donut__chart-title" key={uuid()}>
                {i.name}
              </p>
              <Chart
                key={uuid()}
                options={{
                  labels: ["N/A"],
                }}
                series={[i.score]}
                type="radialBar"
                width="180"
                height="200"
              />

              <p className="donut__chart-blurb" key={uuid()}>
                Sample: {i.sample}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Donut;
