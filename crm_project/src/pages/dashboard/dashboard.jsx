import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar.jsx";
import Top from "./top.jsx";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [totalStudents, setTotalStudents] = useState(null);
  const [totalTeachers, setTotalTeachers] = useState(null);
  const [totalCourses, setTotalCourses] = useState(null);
  const [totalDepartments, setTotalDepartments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/stats");
        const statsData = response.data;
        setTotalStudents(statsData[0].total);
        setTotalTeachers(statsData[1].total);
        setTotalCourses(statsData[2].total);
        setTotalDepartments(statsData[3].total);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error loading data</div>;
  }
const logout = () => {
  sessionStorage.removeItem("token")
  navigate('/log-in')
}
  return (
    <>
      <div className="main">
        <Sidebar />
        <div className="dashboard">
          <Top dashboard="dashboard" />
          <div className="main_section">
            <div className="statistics">
              <div className="stat">
                <div className="stat_text">
                  <h1>Total Students:</h1>
                  {loading ? <div className="loaderNumber"></div> : <h2>{totalStudents}</h2>}
                </div>
                <i className="fa-solid fa-school"></i>
              </div>

              <div className="stat">
                <div className="stat_text">
                  <h1>Total Teachers:</h1>
                  {loading ? <div className="loaderNumber"></div> : <h2>{totalTeachers}</h2>}
                </div>
                <i className="fa-solid fa-chalkboard-teacher"></i>
              </div>

              <div className="stat">
                <div className="stat_text">
                  <h1>Total Courses:</h1>
                  {loading ? <div className="loaderNumber"></div> : <h2>{totalCourses}</h2>}
                </div>
                <i className="fa-solid fa-book"></i>
              </div>

              <div className="stat">
                <div className="stat_text">
                  <h1>Total Departments:</h1>
                  {loading ? <div className="loaderNumber"></div> : <h2>{totalDepartments}</h2>}
                </div>
                <i className="fa-solid fa-building"></i>
              </div>
            </div>
          </div>

          <button onClick={logout}>Log out</button>
        </div>
      </div>
    </>
  );
}
