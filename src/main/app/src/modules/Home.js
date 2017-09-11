import React from 'react'
import { Link } from 'react-router-dom'

// The Home creates links that can be used to navigate
// between routes.
const Home = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/startGame'>StartGame</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

export default Home
