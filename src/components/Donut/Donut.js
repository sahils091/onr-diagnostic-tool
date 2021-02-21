import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./donut.scss";
import uuid from "react-uuid";

const Donut = () => {
  const [gaugeData, setGaugeData] = useState([
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
      id: 6,
    },
  ]);

  return (
    <div className="donut">
      {gaugeData.map((i) => {
        return (
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
        );
      })}
    </div>
  );
};

export default Donut;
