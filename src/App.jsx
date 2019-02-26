import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import LoginScreen from './components/LoginScreen';
import Confirm from './components/Confirm';
import RegisterForm from './components/RegisterForm';
import Main from './components/Main';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Driver from './components/Driver';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component = {Register} />
        <Route exact path="/confirm" component = {Confirm} />
        <Route exact path="/regform" component={RegisterForm} />
        <Route exact path="/" component={Main} />
        <Route exact path="/driver" component={Driver} />

      </div>
      </Router>
    );
  }
}

export default App;
