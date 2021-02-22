import React, { Component } from "react";
import {  withRouter } from "react-router-dom";
import { Line } from "react-chartjs-2";
import uuid from "react-uuid";

class Graph extends Component {
  state = {
    areaData: [
      {
        "Quality Score": [
          {
            date: "Apr",
            sample: 21,
            score: 75,
            vsly: 0,
          },
          {
            date: "May",
            sample: 110,
            score: 71,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 2,
            score: 62,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 0,
            score: 0,
            vsly: 0,
          },
        ],
        Basics: [
          {
            date: "Apr",
            sample: 29,
            score: 78,
            vsly: 0,
          },
          {
            date: "May",
            sample: 66,
            score: 62,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 2,
            score: 42,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 51,
            score: 63,
            vsly: 0,
          },
        ],
        Interaction: [
          {
            date: "Apr",
            sample: 54,
            score: 92,
            vsly: 0,
          },
          {
            date: "May",
            sample: 110,
            score: 43,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 2,
            score: 34,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 0,
            score: 0,
            vsly: 0,
          },
        ],
        Expertise: [
          {
            date: "Apr",
            sample: 29,
            score: 88,
            vsly: 0,
          },
          {
            date: "May",
            sample: 55,
            score: 61,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 26,
            score: 35,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 121,
            score: 46,
            vsly: 0,
          },
        ],
        Process: [
          {
            date: "Apr",
            sample: 31,
            score: 85,
            vsly: 0,
          },
          {
            date: "May",
            sample: 66,
            score: 77,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 23,
            score: 57,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 0,
            score: 0,
            vsly: 0,
          },
        ],
        Knowledge: [
          {
            date: "Apr",
            sample: 31,
            score: 74,
            vsly: 0,
          },
          {
            date: "May",
            sample: 100,
            score: 76,
            vsly: 0,
          },
          {
            date: "Jun",
            sample: 45,
            score: 33,
            vsly: 0,
          },
          {
            date: "Jul",
            sample: 110,
            score: 89,
            vsly: 0,
          },
        ],
      },
    ],
    currentData: {
      "Quality Score": [
        {
          date: "Apr",
          sample: 21,
          score: 75,
          vsly: 0,
        },
        {
          date: "May",
          sample: 110,
          score: 71,
          vsly: 0,
        },
        {
          date: "Jun",
          sample: 2,
          score: 62,
          vsly: 0,
        },
        {
          date: "Jul",
          sample: 0,
          score: 0,
          vsly: 0,
        },
      ],
    },
  };
  options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10,
          },
        },
      ],
    },
  };
  componentDidMount() {
    let filteredData = {};
    let newData = [];
    let newLabel = [];

    this.state.currentData["Quality Score"].map((i) => {
      newData.push(i.score);
      newLabel.push(i.date);
      console.log(newData, newLabel, `new datas in the Map`);
      filteredData = {
        labels: newLabel,
        datasets: [
          {
            data: newData,
            fill: true,
            backgroundColor: "#0071C5",
            borderColor: "#0071C5",
          },
        ],
      };
      console.log(filteredData);
      return this.setState({
        currentData: filteredData,
      });
    });
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.match.params.name);
    let name = this.props.match.params.name;
    console.log(name, `HELOOO NEW PARAMS`);

    if (prevProps.match.params.name !== this.props.match.params.name) {
      if (!this.props.match.params.name) {
        let filteredData = {};
        let newData = [];
        let newLabel = [];

        this.state.currentData["Quality Score"].map((i) => {
          newData.push(i.score);
          newLabel.push(i.date);
          console.log(newData, newLabel, `new datas in component did update`);
          filteredData = {
            labels: newLabel,
            datasets: [
              {
                data: newData,
                fill: true,
                backgroundColor: "#0071C5",
                borderColor: "#0071C5",
              },
            ],
          };
          console.log(filteredData, `in Component Did update`);
          return this.setState({
            currentData: filteredData,
          });
        });
      } else {
        let filteredData = {};
        let newData = [];
        let newLabel = [];

        this.state.areaData.map((i) => {
          i[name].map((element) => {
            newData.push(element.score);
            newLabel.push(element.date);
            console.log(
              newData,
              newLabel,
              `Absolutely New Data new datas in component did update`
            );
            filteredData = {
              labels: newLabel,
              datasets: [
                {
                  data: newData,
                  fill: true,
                  backgroundColor: "#0071C5",
                  borderColor: "#0071C5",
                },
              ],
            };
            console.log(filteredData, `in Component Did update`);
            return this.setState({
              currentData: filteredData,
            });
          });
        });
      }
    }
  }
  render() {
    return (
      <div>
        <Line
          key={uuid()}
          data={this.state.currentData}
          options={this.options}
        />
      </div>
    );
  }
}

export default withRouter(Graph);
