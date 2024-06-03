import React from 'react'
import './sidebar.css'

export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo">
      <i class="fa-solid fa-note-sticky"></i>
      <h4>CRM</h4>

      </div>


      <div className="sides">

        <div className="side">
        <i class="fa-solid fa-house"></i>
        <h1>Dashboard</h1>
        </div>

        <div className="side">
        <i class="fa-brands fa-discourse"></i>
        <h1>Courses</h1>
        </div>

        <div className="side">
        <i class="fa-solid fa-user"></i>
        <h1>Teachers</h1>
        </div>

        <div className="side">
        <i class="fa-solid fa-users"></i>
        <h1>Groups</h1>
        </div>

        <div className="side">
        <i class="fa-solid fa-graduation-cap"></i>
        <h1>Students</h1>
        </div>

      </div>
    </div>
  )
}
