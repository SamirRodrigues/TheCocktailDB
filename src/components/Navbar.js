import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/TheCocktailDB/">
          <img src={logo} alt="Cocktail db logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/TheCocktailDB/">Home</Link>
        </li>
        <li>
          <Link to="/TheCocktailDB/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
