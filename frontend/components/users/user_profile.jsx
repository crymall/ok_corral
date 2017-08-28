import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import keys from 'lodash/keys';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        summary: '',
        doing_with_life: '',
        good_at: '',
        fav_media: '',
        six_things: '',
        thinking_about: '',
        fri_night: '',
        message_if: '',
        image_url: ''
      },
      summaryIsOpen: false,
      doingIsOpen: false,
      goodIsOpen: false,
      favIsOpen: false,
      sixIsOpen: false,
      thinkingIsOpen: false,
      friIsOpen: false,
      messageIsOpen: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.upload = this.upload.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.user_id);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    this.props.processForm(user);
  }

  handleInput(type) {
    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state, {user: {[type]: e.currentTarget.value}})
    );
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
            <div className='profile-body'>
              <div className='profile-text'>
                <h2>My self-summary <button>Edit</button></h2>
                <p>{this.props.currentUser.summary}</p>
                <h2>What I'm doing with my life <button>Edit</button></h2>
                <p>{this.props.currentUser.doing_with_life}</p>
                <h2>I'm really good at <button>Edit</button></h2>
                <p>{this.props.currentUser.good_at}</p>
                <h2>Favorite books, movies, shows, music, and food <button>Edit</button></h2>
                <p>{this.props.currentUser.fav_media}</p>
                <h2>Six things I could never do without <button>Edit</button></h2>
                <p>{this.props.currentUser.six_things}</p>
                <h2>I spend a lot of time thinking about <button>Edit</button></h2>
                <p>{this.props.currentUser.thinking_about}</p>
                <h2>On a typical Friday night I am <button>Edit</button></h2>
                <p>{this.props.currentUser.fri_night}</p>
                <h2>You should message me if <button>Edit</button></h2>
                <p>{this.props.currentUser.message_if}</p>
              </div>
            </div>

          <Link to='/users'>Back to Index</Link>
          </div>
        )
      }
      else {
         return (
          <div>
            <h1>{this.props.user.username}</h1>
              <h2>My self-summary</h2>
              <p>{this.props.user.summary}</p>
              <h2>What I'm doing with my life</h2>
              <p>{this.props.user.doing_with_life}</p>
              <h2>I'm really good at</h2>
              <p>{this.props.user.good_at}</p>
              <h2>Favorite books, movies, shows, music, and food</h2>
              <p>{this.props.user.fav_media}</p>
              <h2>Six things I could never do without</h2>
              <p>{this.props.user.six_things}</p>
              <h2>I spend a lot of time thinking about</h2>
              <p>{this.props.user.thinking_about}</p>
              <h2>On a typical Friday night I am</h2>
              <p>{this.props.user.fri_night}</p>
              <h2>You should message me if</h2>
              <p>{this.props.user.message_if}</p>

            <Link to='/users'>Back to Index</Link>
          </div>
        );
      }
    }
  }
}

export default UserProfile
