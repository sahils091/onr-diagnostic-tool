import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />

      <section className="homepage__main">
        <Sidebar />
        <Dashboard />
      </section>
    </div>
  );
};

export default Homepage;
