import React from 'react';
import User from './User';
import UserForm from './UserForm';
import styled from 'styled-components';

const UserProfile = () => (
  <Grid>
    <User />
    <UserForm />
  </Grid>
);

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default UserProfile;