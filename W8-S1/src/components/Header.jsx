import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-4 bg-gray-800 text-white'>
      <h1>My App</h1>
      <nav className='space-x-4'>
        <Link to="/" className='hover:text-gray-300'>Home</Link>
        <Link to="/about" className='hover:text-gray-300'>About</Link>
        <Link to="/contact" className='hover:text-gray-300'>Contact</Link>
        <Link to="/quotes" className='hover:text-gray-300'>Quotes</Link>
      </nav>
    </header>
  )
}

export default Header