import React from "react";
import Areachart from "../Areachart/Areachart";
import Piechart from "../Piechart.js/Piechart";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__title-wrapper">
        <h2 className="dashboard__title">PERFORMANCE MANAGEMENT</h2>
      </div>
      <div className="dashboard__subtitle-wrapper">
        <h2 className="dashboard__subtitle">
          <span className="dashboard__icon">
            <i className="fas fa-globe"></i>
          </span>
          Diagnostic Tool{" "}
        </h2>
        <p className="dashboard__icon--tack">
          <i className="fas fa-thumbtack"></i>
        </p>
      </div>
      <section className="dashboard__detail-wrapper">
        <div className="dashboard__detail-left">
          <Piechart />
        </div>
        <div className="dashboard__detail-right">
          <Areachart />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
