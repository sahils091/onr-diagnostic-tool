import React from 'react';
import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
                
           <div className="sidebar__icon-wrapper">
           <p className="sidebar__icon">
           <i className="fas fa-thumbtack"></i>
            </p>
            <p className="sidebar__icon">
            <i className="far fa-chart-bar"></i>
            </p>
            <p className="sidebar__icon">
            <i className="fas fa-mail-bulk"></i>
            </p>
            <p className="sidebar__icon">
            <i className="fas fa-shapes"></i>
            </p>
            <p className="sidebar__icon sidebar__icon--last">
            <i className="fas fa-redo-alt"></i>
            </p>

           </div>
            
        </div>
    );
};

export default Sidebar;