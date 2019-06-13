import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import {Container, } from 'semantic-ui-react';
import {Switch, Route, } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/profile' component={UserProfile} />
      </Switch>
    </Container>
  </>
);

export default App;
