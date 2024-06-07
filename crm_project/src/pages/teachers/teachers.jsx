import React from 'react'
import './teachers.css'
import Sidebar from '../dashboard/sidebar'
import Top from '../dashboard/top';

export default function teachers() {
  return (
    <div className='main'>
        <Sidebar />
        <div className="teachers">
            <Top />

            <div className="add_teacher">
                <h1>Add A New Teacher</h1>
                <div className="addTeacherTop">
                    <input type="text"placeholder='Name*' />
                    <input type="number" placeholder='Number*' />
                    <input type="file" placeholder='image'/>
                </div>
            </div>

        </div>

        
    </div>
  )
}
