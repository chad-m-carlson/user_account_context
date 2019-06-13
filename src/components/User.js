import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import {UserConsumer, } from '../providers/UserProvider';

const User = () => (
  <UserConsumer>
    { value => (
      <Card>
      <Card.Content>
        <Card.Header>{value.username}</Card.Header>
          <p>Joined: {value.dateJoined}</p>
        <Image src={value.avatar}/>
        <Card.Meta>
          <p>Birthday: {value.birthday}</p>
        </Card.Meta>
      </Card.Content>
        <Card.Meta>
          {value.email}
        </Card.Meta>
      <Card.Content>
      </Card.Content>
      </Card>
    )}
  </UserConsumer>
);

export default User;