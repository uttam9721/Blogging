

import React from 'react'
import Admin from './pages/Admin'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Blog/>} />
      <Route path='/admin' element={<Admin/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
