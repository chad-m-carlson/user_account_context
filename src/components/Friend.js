import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react';
import {Grid} from '../styles/Styles';

const Friend = (props) => (
  <Grid>
    <Card>
      <Card.Content>{props.name}</Card.Content>
      <Image src={props.avatar}/>
      <Button onClick={props.deleteFriend} color='red'>Delete Friend</Button>
    </Card>
  </Grid>
);

export default Friend;