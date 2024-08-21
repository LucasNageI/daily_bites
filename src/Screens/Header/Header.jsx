import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <span className='logo-title'>DAILY BITES</span>
      </div>
      <nav className='nav'>
            <Link to={'/Log'} className='link'>Calorie Log</Link>
            <Link to={'/Food'} className='link'>Food</Link>
            <Link to={'/Meals'} className='link'>Meals</Link>
            <Link to={'/Calculator'} className='link'>Calorie calculator</Link>
      </nav>
    </header>
  )
}
