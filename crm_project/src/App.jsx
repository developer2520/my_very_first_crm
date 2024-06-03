import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, BrowserRouter} from 'react-router-dom'
import Sidebar from './pages/dashboard/sidebar'
import Signin from './pages/dashboard/signin/signin.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Route exact path='/signin' element={<Signin />} />
    <Route path='/sidebar' element={<Sidebar />} />
    </BrowserRouter>
      
    </>
  )
}

export default App
