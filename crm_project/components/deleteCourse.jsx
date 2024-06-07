import React from 'react'
import './delete.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



export default function deleteCourse({deleteCourseToggle, deleteCourseFromApi, course}) {

  const notify = () => toast.success('Course deleted');


  

  const handleDelete = () => {
    deleteCourseFromApi(course.id)
    deleteCourseToggle()
    notify()
  }
  return (
    <div className='deleteCourse'>
        <h1>Do you want to delete this course</h1>
        <p>All groups, students and teachers related to this
course will be deleted!</p>

<div className="buttons">
  <button onClick={deleteCourseToggle}>
    Cancel
  </button>

  <button onClick={handleDelete} >Delete</button>
</div>
    </div>
  )
}
