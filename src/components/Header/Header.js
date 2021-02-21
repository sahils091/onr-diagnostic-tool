import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__left">
          <div className="sidebar__top"></div>

          <p className="header__title">Diagnostic Tool</p>
        </div>
        <div className="header__right">
          <p className="header__login-detail">Logged in as General User</p>
          <div className="header__icon-wrapper">
            <p className="header__icon">
              <i className="fas fa-sliders-h"></i>
            </p>
            <p className="header__icon">
              <i className="fa fa-file-download"></i>
            </p>
            <p className="header__icon">
              <i className="fa fa-print"></i>
            </p>
            <p className="header__icon">
              <i className="fa fa-question-circle"></i>
            </p>
            <p className="header__icon">
              <i className="fa fa-arrow-circle-right"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
