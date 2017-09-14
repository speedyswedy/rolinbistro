import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './modules/App.js'
import './App.css';
 
render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));