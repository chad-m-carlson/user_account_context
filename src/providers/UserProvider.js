import React from 'react';

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    username: 'codingManiac',
    firstName: 'Sam',
    lastName: 'Sung',
    avatar: 'https://media2.giphy.com/media/SjtVHuqSlvZks/giphy.gif',
    dateJoined: '5/18/19',
    birthday: '10/21/85',
    email: 'coding_manic_456@hotmail.com',
    updateUser: (user) => this.updateUser(user),
  }
  updateUser = (user) => {
    this.setState({...user,})
  };
  
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    );
  }
}

export default UserProvider;