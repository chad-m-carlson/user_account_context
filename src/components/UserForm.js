import React from 'react';
import {Form, } from 'semantic-ui-react';
import {UserConsumer, } from '../providers/UserProvider';
import styled from 'styled-components';

class UserForm extends React.Component {
  state = {
    username: this.props.username,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    avatar: this.props.avatar,
    birthday: this.props.birthday,
    email: this.props.email,
   };

   handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...this.state,};
    this.props.updateUser(newUser);
   };

   handleChange = (e, { name, value, }) => {
    this.setState({ [name]: value, });
  };

  render() {
    const {username, firstName, lastName,avatar, birthday, email} = this.state;
    return (
      <Form onSubmit={this.handleSubmit} style={{marginTop: '20px'}}>
        <Form.Group>
          <Form.Input
            label="New Username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            />
          <Form.Input
            label="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            />
          <Form.Input
            label="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            />
          <Form.Input
            label="Birthday"
            type="text"
            name="birthday"
            value={birthday}
            onChange={this.handleChange}
            />
          <Form.Select
            label="Avatar"
            name="avatar"
            value={avatar}
            onChange={this.handleChange}
            options={avatarOptions}
            />
          </Form.Group>
          <Form.Button as={StyledButton} 
            onClick={()=>setTimeout(() => {
              alert('Your Changes Have Been Saved')
            }, 500)}
              
              
            >Save
            </Form.Button >
      </Form>
    );
  }
}

const ConnectedUserForm = (props) => {
  return(
    <UserConsumer>
      { value => (
        <UserForm
        {...props}
        {...value}
        updateUser={value.updateUser}
      />
      )}
    </UserConsumer>
  )
}

const StyledButton = styled.button`
    background: #312d2d;
  color: white;
  padding: 15px 25px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  width: 150px;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background: #606060;
    transition: background 0.2s ease;
  }
`;

const avatarOptions = [
  { key: 1, text: 'Peter', value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvuaC2zgwok5xKV5m7jwl-9FDSFI6S1rM8HoNR0VOYnss4Wf5Pw"},
  { key: 2, text: "Stewie", value: "https://media2.giphy.com/media/SjtVHuqSlvZks/giphy.gif"},
  { key: 3, text: "Brian", value: "https://www.lifewithdogs.tv/wp-content/uploads/2013/12/12.6.13-Brian-Griffin-is-Coming-Back-590x414.jpg"},
  { key: 4, text: "Meg", value: "https://i.pinimg.com/originals/14/59/9c/14599c41435c08e2a3662b4bd7d36621.jpg"},
  { key: 5, text: "Chris", value: "https://pbs.twimg.com/profile_images/3320137902/bad7c30e71d8aab3824c5f779a740689_400x400.jpeg"},
  { key: 6, text: "Lois", value: "https://s3-ap-southeast-2.amazonaws.com/fna-wordpress-website10/wp-content/uploads/2016/04/05100633/FOX8_CastImage_Family_Guy_Louis_Griffin-232x300.jpg"},
]

export default ConnectedUserForm;