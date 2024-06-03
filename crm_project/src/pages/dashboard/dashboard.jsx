import React from 'react'
import Sidebar from './sidebar.jsx'
import './dashboard.css'
import {format} from 'date-fns'

export default function dashboard() {


    
        const today = new Date()
        const formattedDate = format(today, 'dd-MM-yy')

  return (
    <>

    <div className='main'>

    <Sidebar />

    <div className="dashboard">

        <div className="top">
        <h1>Dashboard</h1>
        <h1>{formattedDate}</h1>

        <button className='dark_mode'><i class="fa-solid fa-sun"></i></button>


        </div>

        <div className="main_section">

            <div className="statistics">

                <div className="stat">

                    <div className="stat_text">

                    <h1>Total Students:</h1>
                    <h2>#####</h2>


                    </div>

                    <i class="fa-solid fa-school"></i>
                  
                </div>

                <div className="stat">

                    <div className="stat_text">

                    <h1>Total Students:</h1>
                    <h2>#####</h2>


                    </div>

                    <i class="fa-solid fa-school"></i>
                  
                </div>

                <div className="stat">

                    <div className="stat_text">

                    <h1>Total Students:</h1>
                    <h2>#####</h2>


                    </div>

                    <i class="fa-solid fa-school"></i>
                  
                </div>


                <div className="stat">

                    <div className="stat_text">

                    <h1>Total Students:</h1>
                    <h2>#####</h2>


                    </div>

                    <i class="fa-solid fa-school"></i>
                  
                </div>
            </div>
        </div>
       
    </div>



    </div>

 

    
    </>
  )
}
