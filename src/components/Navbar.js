import React from 'react';
import {Link, } from 'react-router-dom';
import {Menu, } from 'semantic-ui-react';
import {UserConsumer} from '../providers/UserProvider';

const Navbar = () => (
  <UserConsumer>
  { value => (
    <Menu>
        <Link to='/'>
          <Menu.Item>
            Home
          </Menu.Item>
        </Link>
        <Link to='/user/profile'>
          <Menu.Item>
            {value.username}
          </Menu.Item>
        </Link>
        <Link to='/user/friends'>
          <Menu.Item>
            Friends
          </Menu.Item>
        </Link>
      </Menu>  
    )}
  </UserConsumer>
);

export default Navbar;