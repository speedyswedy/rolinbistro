import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Board from './Board'

function MainSwitch() {
  return (
  <main>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/board' component={Board}/>
    </Switch>
  </main>
  );
}

export default MainSwitch