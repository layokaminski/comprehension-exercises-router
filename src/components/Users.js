import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingMessage, match } = this.props;
    const { usersId } = match.params;
    return (
      <div>
        { usersId ? <h2>{ usersId }</h2> : <h2>Users</h2> }
        <p>
          {greetingMessage}, this is my awesome Users component
        </p>
      </div>
    );
  }
};

export default Users;
