import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import DashBoard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={DashBoard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
