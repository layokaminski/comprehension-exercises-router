import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:usersId" render={(props) => (
            <Users {...props} greetingMessage="Good Morning" />
            )}
          />
          <Route path="/strictacess" render={() => (
            <StrictAccess user={ { username: 'joao', password: '1234' } } />
          )}/>
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <Link to="/">Home</Link><br />
        <Link to="/about">About</Link><br />
        <Link to="/users">Users</Link><br />
        <Link to="/strictacess">Strict Access</Link><br />
        
      </BrowserRouter>
    );
  }
}

export default App;
