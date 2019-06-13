import React from 'react';
import User from './User';
import UserForm from './UserForm';
import RandomFriends from './RandomFriends';
import styled from 'styled-components';
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
          if (i >= 3) return;
          return <RandomFriends key={f.id} {...f} />
        })
        )}
    </FriendConsumer>
  </>
);

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default UserProfile;