import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, BrowserRouter, Routes,Navigate   } from 'react-router-dom'
import Sidebar from './pages/dashboard/sidebar'
import Signin from './pages/signin/signin.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'
import SignIn from './pages/signin/signin.jsx'
import Courses from './pages/courses/courses.jsx'
import DeleteTest from '../components/deleteCourse.jsx'
import Teachers from './pages/teachers/teachers.jsx'



function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
    <BrowserRouter>
    <Routes >
    <Route exact path='/' element={<Navigate to='/log-in' />} />
    <Route path='/sidebar' element={<Sidebar />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/log-in' element={<SignIn />} />
    <Route path='/courses' element={<Courses />} />
    <Route path='/deleteTest' element={<DeleteTest />} />
    <Route path='/teachers' element={<Teachers />} />
    
    

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
