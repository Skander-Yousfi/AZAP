import './index.css';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Components/navbar'
import ImageGrid from './Components/companies'
import LoginContainer from './Components/login'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/companies" component={ImageGrid} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/contact" />
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

