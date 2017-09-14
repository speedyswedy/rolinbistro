import React from 'react'
import { Link } from 'react-router-dom'


const Main = () => (
	<header>
		<nav>
		  <ul>
		  	 <li><Link to='/home'>Home</Link></li> 
		     <li><Link to='/board'>StartGame</Link></li>
		  </ul>
		</nav>
	</header>
)

export default Main