import React from 'react';
import {FriendConsumer} from '../providers/FriendProvider';
import Friend from './Friend';
import FriendForm from './FriendForm'
// import {Grid} from '../styles/Styles';
import {Grid} from 'semantic-ui-react';

class UserFriends extends React.Component {
  state = {  }

  // deleteFriend = () => {
  //   debugger
  // };

  render() {
    return (
      <>
      <Grid>
        <FriendConsumer>
          {value => (
            value.friends.map( f => {
              return(
                <Friend key={f.id}
                {...f} 
                deleteFriend={value.deleteFriend}/>)
              })
              )}
        </FriendConsumer>
      </Grid>
      <FriendForm />
    </>
    );
  }
}

export default UserFriends;