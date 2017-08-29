import React from 'react';
import merge from 'lodash/merge';

class UserProfileHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        image_url: ''
      }
    }

    this.upload = this.upload.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.user_id)
    this.setState(merge({}, this.state, {user: this.props.currentUser}))
  }

  upload(e) {
    e.preventDefault();

    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, image) => {
        if (error === null) {
          const img = image[0].url
          this.props.processForm({image_url: img});
          this.setState({user: {image_url: img}});
        }
      }
    );
  }

  render() {
    if (!this.props.user && !this.props.currentUser) {
      return <div></div>;
    } else {
      if (!this.props.user) {
        return (
          <div>
            <div className='profile-header'>
              <div className='profile-header-items'>
                <img
                  src={this.props.currentUser.image_url ?
                    `${this.state.user.image_url || this.props.currentUser.image_url}`
                    : 'http://res.cloudinary.com/reeedo/image/upload/v1503892978/ic_account_circle_ifhpuy.png'}
                  onClick={this.upload}
                />
                <div className='profile-header-text'>
                  <h1>{this.props.currentUser.username}</h1>
                  <h3>{this.props.currentUser.age}</h3>
                </div>
              </div>
            </div>
          </div>
        )
      }
      else {
         return (
          <div>
            <div className='profile-header'>
              <div className='profile-header-items'>
                <img
                  src={this.props.user.image_url ?
                    `${this.props.user.image_url}`
                    : 'http://res.cloudinary.com/reeedo/image/upload/v1503892978/ic_account_circle_ifhpuy.png'}
                />
                <div className='profile-header-text'>
                  <h1>{this.props.user.username}</h1>
                  <h3>{this.props.user.age}</h3>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}

export default UserProfileHeader;
