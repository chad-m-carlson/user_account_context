import React from 'react';

const avatarGenerator = () => {
  let x = Math.floor(Math.random() * Math.floor(9723))
  return `https://robohash.org/${x}/?set=set4`
}
const FriendContext = React.createContext();

export const FriendConsumer = FriendContext.Consumer;

class FriendProvider extends React.Component {
  state = {
    friends: [{id: 1, name: 'testfriend 1', avatar: avatarGenerator()},
    {id: 2, name: 'testfriend 2', avatar: avatarGenerator()},
    {id: 3, name: 'testfriend 3', avatar: avatarGenerator()},
    {id: 4, name: 'testfriend 4', avatar: avatarGenerator()},
    {id: 5, name: 'testfriend 5', avatar: avatarGenerator()},
    {id: 6, name: 'testfriend 6', avatar: avatarGenerator()},
    {id: 7, name: 'testfriend 7', avatar: avatarGenerator()},],
    deleteFriend: (friend) => this.deleteFriend(friend),
    updateFriend: (friend) => this.updateFriend(friend),
  };


  deleteFriend = (id) => {
    const newFriendsArray = this.state.friends.filter( f => {
      if (f.id !== id )
      return f
    return
    })
    this.setState({friends: [...newFriendsArray]})
  };

  updateFriend = (id) => {

  };

  render() {
    return (
      <FriendContext.Provider 
      value={this.state} >
        {this.props.children}
      </FriendContext.Provider>
    );
  };
};



export default FriendProvider;