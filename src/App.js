import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={DashBoard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
