import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.user_id);
  }

  render() {
    return (
      <h1>{this.props.user.users.username}</h1>
    );
  }
}

export default UserProfile
