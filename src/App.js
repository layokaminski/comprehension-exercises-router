import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route  exact path="/" component={ Home }/>
        <Route  path="/about" component={ About }/>
        <Route  exact path="/users/:usersId" render={(props) => <Users {...props} greetingMessage="Good Morning" /> }/>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/users">Users</Link><br />
      </BrowserRouter>
    );
  }
}

export default App;
