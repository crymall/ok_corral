import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class UserProfileHeader extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      user: {
        image_url: ''
      }
    }

    this.upload = this.upload.bind(this);
    this.pressButton = this.pressButton.bind(this);

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
          this.props.processForm({
                                    image_url: img
                                 }
                                );
          this.setState({
                          user: {
                            image_url: img
                          }
                        }
                      );
        }
      }
    );

  }

  pressButton() {

    this.props.createDialogue({
      dialogue: {
        user_one_id: this.props.currentUser.id,
        user_two_id: this.props.user.id
      }
    }).then(
      ({ dialogue }) => (
        this.props.history.push(
          `/users/${this.props.user.id}/messages/${dialogue.id}`
        )
      )
    );

  }

  render() {

    let backArrow;
    let account_circle = 'http://res.cloudinary.com/reeedo/image/upload/v1503892978/ic_account_circle_ifhpuy.png';

    if (!this.props.user && !this.props.currentUser) {
      return <div></div>;
    } else {

      if (this.props.location.pathname.split('/').includes('messages') ||
          this.props.location.pathname.split('/').includes('questions')) {

          backArrow = (
            <Link to={`/users/${this.props.currentUser.id}`}>
              <button className='back-button'></button>
            </Link>
          );
      } else {
          backArrow = null;
      }

      if (!this.props.user) {
        return (
          <div>
            <div className='profile-header'>
              <div className='profile-header-items'>

                { backArrow }

                <img
                  className='currentuser-image'
                  src={this.props.currentUser.image_url ?
                    `${this.state.user.image_url ||
                      this.props.currentUser.image_url}`
                    : {account_circle}}
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
        let messageButton =
          <button className='question-index-button' onClick={this.pressButton}>
            Message
          </button>;

        this.props.user.dialogues.forEach((dialogue) => {
          if (dialogue.user_one_id === this.props.currentUser.id ||
              dialogue.user_two_id === this.props.currentUser.id) {
            messageButton = (
              <Link to={`/users/${this.props.user.id}/messages/${dialogue.id}`}>
                <button className='question-index-button'>
                  Messages
                </button>
              </Link>
            );
          }
        });

        return (
          <div>
            <div className='profile-header'>
              <div className='profile-header-items'>

                <Link to={`/users/${this.props.user.id}`}>
                  <img
                    src={this.props.user.image_url ?
                         `${this.props.user.image_url}` :
                         {account_circle}}
                  />
                </Link>

                <div className='profile-header-text'>

                  <h1>{this.props.user.username}</h1>
                  <h3>{this.props.user.age}</h3>

                </div>

                <Link to={`/users/${this.props.user.id}/questions`}>
                  <button className='question-index-button'>
                    Questions
                  </button>
                </Link>

                { messageButton }

              </div>
            </div>
          </div>
        )
      }
    }

  }

}

export default UserProfileHeader;
