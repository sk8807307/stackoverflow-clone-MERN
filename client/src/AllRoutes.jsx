import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Auth from './components/pages/Auth/Auth'
import Questions from './components/pages/Questions/Questions'
import AskQuestion from './components/pages/AskQuestion/AskQuestion'
import DisplayQuestion from './components/pages/Questions/DisplayQuestion'

const AllRoutes = () => {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/AskQuestion' element={<AskQuestion />} />
        <Route path='/DisplayQuestion' element={<DisplayQuestion />} />
      </Routes>
  )
}

export default AllRoutes