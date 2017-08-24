import React from 'react';

class UsersIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    let users;
    if (this.props.users) {
      users = this.props.users
        .map((user, idx) => {return <li key={idx}>{user.username}</li>})

      return (
        <div className='users-index'>
          <ul>
            {users}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default UsersIndex;
