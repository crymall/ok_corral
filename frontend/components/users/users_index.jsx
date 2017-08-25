import React from 'react';
import { UserItem } from './user_item';

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
        .map((user, idx) => {return <UserItem className='user-item' user={user} />})

      return (

        <div className='users-index'>
          <div className='user-items'>
            {users}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default UsersIndex;
