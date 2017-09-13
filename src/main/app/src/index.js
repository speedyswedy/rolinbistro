import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { Game } from './modules/Board.js'
 
render((
  <BrowserRouter>
    <Game />
  </BrowserRouter>
), document.getElementById('root'));