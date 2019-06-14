import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react';
import {Grid} from '../styles/Styles';

const Friend = (props) => (
  <>
      <Card.Content>{props.name}</Card.Content>
      <Image src={props.avatar}/>
      <Button onClick={() => props.deleteFriend(props.id)} color='red'>Delete Friend</Button>
  </>
);

export default Friend;