import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import UserFriends from './components/UserFriends';
import NoMatch from './components/NoMatch';
import {Container, } from 'semantic-ui-react';
import {Switch, Route, } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/profile' component={UserProfile} />
        <Route exact path='/user/friends' component={UserFriends} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
