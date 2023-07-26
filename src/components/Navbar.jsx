import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <ul class="navbar">
  <li class="nav-item">
    <Link to={'/'} class="nav-link active" aria-aria-current="page">Profile</Link>
  </li>
  <li class="nav-item">
    <Link to={'/tracks'} class="nav-link">Tracks</Link>
  </li>
  <li class="nav-item">
    <Link to={'/recent-tracks'} class="nav-link">Recent Tracks</Link>
  </li>
  <li class="nav-item">
    <Link to={'/artists'} class="nav-link">Top Artists</Link>
  </li>
</ul>
  )
}

export default Navbar