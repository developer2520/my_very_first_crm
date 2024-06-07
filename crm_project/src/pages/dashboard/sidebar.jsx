import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <i className="fa-solid fa-note-sticky"></i>
        <h4>CRM</h4>
      </div>

      <div className="sides">
        <Link className="link" to={"/dashboard"}>
          <div className="side">
            <i className="fa-solid fa-house"></i>
            <h1>Dashboard</h1>
          </div>
        </Link>
        <Link className="link" to={"/courses"}>
          <div className="side">
            <i className="fa-brands fa-discourse"></i>
            <h1>Courses</h1>
          </div>
        </Link>
        <Link className="link" to={"/teachers"}>
          <div className="side">
            <i className="fa-solid fa-user"></i>
            <h1>Teachers</h1>
          </div>
        </Link>

        <div className="side">
          <i className="fa-solid fa-users"></i>
          <h1>Groups</h1>
        </div>

        <div className="side">
          <i className="fa-solid fa-graduation-cap"></i>
          <h1>Students</h1>
        </div>
      </div>
    </div>
  );
}
