import React from 'react';
import styled from 'styled-components';
import {Feed, } from 'semantic-ui-react';

const RandomFriends = (props) => {
  const {avatar, name} = props
  return(
  <Feed>
    <Feed.Event as={FeedStyle}>
      <Feed.Label>
        <img src={avatar} alt=''/>
      </Feed.Label>
      <Feed.Content>
        <p>{name} says: <span style={{fontStyle: 'italic'}}>{sentenceGenerator()}</span></p>
      </Feed.Content>
    </Feed.Event>
  </Feed>
  )
};

const sentenceGenerator = () => {
  let sentence = [
    'I want to buy a onesie… but know it won’t suit me.',
    'They got there early, and they got really good seats.',
    'I am happy to take your donation; any amount will be greatly appreciated.',
    'The memory we used to share is no longer coherent.',
    'Rock music approaches at high velocity.',
    'Joe made the sugar cookies; Susan decorated them.',
    'He didn’t want to go to the dentist, yet he went anyway.',
    'The old apple revels in its authority.',
  ]
  return(
    sentence[Math.floor(Math.random() * Math.floor(8))]
  )
};

const FeedStyle = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: azure !important;
`;


export default RandomFriends;