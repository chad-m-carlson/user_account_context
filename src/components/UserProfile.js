import React from 'react';
import User from './User';
import UserForm from './UserForm';
import RandomFriends from './RandomFriends';
import {Grid} from '../styles/Styles';
import {FriendConsumer} from '../providers/FriendProvider';

const UserProfile = () => (
  <>
  <Grid>
    <User />
    <UserForm />
  </Grid>
    <FriendConsumer>
      {value => (
        value.friends.map( (f, i) => {
          if (i >= 3) return null;
          return (<RandomFriends key={f.id} {...f} />)
        })
        )}
    </FriendConsumer>
  </>
);



export default UserProfile;