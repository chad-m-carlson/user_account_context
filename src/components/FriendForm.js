import React from 'react';
import {Form} from 'semantic-ui-react';
import {FriendConsumer} from '../providers/FriendProvider';

class FriendForm extends React.Component {
  state = {
    name: this.props.name,
  }
  render() {
    return (
      <Form>
        <Form.Input
          label="Name"
          type="text"
          name="name"
          placeholder="This Doesn't Do Anything Yet"
          value={this.state.name}
        />
      </Form>
    );
  }
}

const ConnectedFriendForm = (props) => {
  return(
    <FriendConsumer>
      { value => (
        <FriendForm
        {...value}
        />
      )}
    </FriendConsumer>
  )
}

export default ConnectedFriendForm;