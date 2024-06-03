import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Sidebar from './pages/dashboard/sidebar'
import Signin from './pages/signin/signin.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes >
    <Route exact path='/signin' element={<Signin />} />
    <Route path='/sidebar' element={<Sidebar />} />
    <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
