import React from 'react';
import {FriendConsumer} from '../providers/FriendProvider';
import Friend from './Friend';
import FriendForm from './FriendForm'
// import {Grid} from '../styles/Styles';
import {Grid, Card} from 'semantic-ui-react';

class UserFriends extends React.Component {
  state = {  }

  render() {
    return (
      <>
      <FriendForm />
      <br />
      <Card.Group>
        <FriendConsumer>
          {value => (
            value.friends.map( f => {
              return(
                <Card>
                <Friend key={f.id}
                {...f} 
                deleteFriend={value.deleteFriend}/>
              </Card>
                )
              })
              )}
        </FriendConsumer>
      </Card.Group>
    </>
    );
  }
}

export default UserFriends;