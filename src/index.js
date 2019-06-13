import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, } from 'react-router-dom';
import UserProvider from './providers/UserProvider';
import FriendProvider from './providers/FriendProvider';

ReactDOM.render(
<FriendProvider>
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
</FriendProvider>
, document.getElementById('root'));
