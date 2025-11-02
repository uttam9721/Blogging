

import React from 'react'
import Admin from './pages/Admin'
import Blog from './pages/Blog'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Blog/>} />
      <Route path='/admin' element={<Admin/>} />
     </Routes>
    </div>
  )
}

export default App
