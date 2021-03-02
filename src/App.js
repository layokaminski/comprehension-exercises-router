import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/users/:usersId" render={(props) => (
            <Users {...props} greetingMessage="Good Morning" />
            )}
          />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/users">Users</Link><br />
      </BrowserRouter>
    );
  }
}

export default App;
