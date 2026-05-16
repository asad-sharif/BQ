import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import Quotes from './pages/Quotes.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='quotes' element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App