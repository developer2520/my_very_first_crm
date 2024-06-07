import React from 'react'
import './top.css'
import { format } from 'date-fns';

export default function top({sidebar},{dashboard}) {

    const today = new Date();
    const formattedDate = format(today, "dd-MM-yy");
  return (
    <div className="top">
    <h1>{dashboard}</h1>
    <h2>{formattedDate}</h2>

    <button className="dark_mode">
      <i className="fa-solid fa-sun"></i>
    </button>
  </div>
  )
}
