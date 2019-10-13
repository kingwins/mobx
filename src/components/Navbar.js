import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar () {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="btn-floating pink lighten-1 center-align">Mobx</Link>
        <ul className="right">
          <li><NavLink to="/schools">Schools</NavLink> </li>
          <li><NavLink to="/courts">Courts</NavLink> </li>          
        </ul>
      </div>
    </nav>
  )
}
