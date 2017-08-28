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
    this.toggleSummary = this.toggleSummary.bind(this);
    this.toggleDoing = this.toggleDoing.bind(this);
    this.toggleGood = this.toggleGood.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    this.toggleSix = this.toggleSix.bind(this);
    this.toggleThinking = this.toggleThinking.bind(this);
    this.toggleFri = this.toggleFri.bind(this);
    this.toggleMessage = this.toggleMessage.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.user_id)
    this.setState(merge({}, this.state, {user: this.props.currentUser}))
  }

  handleSubmit(e) {
    e.preventDefault();
    const userstate = this.state.user;
    this.props.processForm(userstate);
    this.setState({user: userstate})
  }

  handleInput(type) {
    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state, {user: this.props.currentUser}, {user: {[type]: e.currentTarget.value}})
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

  toggleSummary() {
    if (this.state.summaryIsOpen === false) {
      this.setState({summaryIsOpen: true});
    } else {
      this.setState({summaryIsOpen: false});
    }
  }

  toggleDoing() {
    if (this.state.doingIsOpen === false) {
      this.setState({doingIsOpen: true});
    } else {
      this.setState({doingIsOpen: false});
    }
  }

  toggleGood() {
    if (this.state.goodIsOpen === false) {
      this.setState({goodIsOpen: true});
    } else {
      this.setState({goodIsOpen: false});
    }
  }

  toggleFav() {
    if (this.state.favIsOpen === false) {
      this.setState({favIsOpen: true});
    } else {
      this.setState({favIsOpen: false});
    }
  }

  toggleSix() {
    if (this.state.sixIsOpen === false) {
      this.setState({sixIsOpen: true});
    } else {
      this.setState({sixIsOpen: false});
    }
  }

  toggleThinking() {
    if (this.state.thinkingIsOpen === false) {
      this.setState({thinkingIsOpen: true});
    } else {
      this.setState({thinkingIsOpen: false});
    }
  }

  toggleFri() {
    if (this.state.friIsOpen === false) {
      this.setState({friIsOpen: true});
    } else {
      this.setState({friIsOpen: false});
    }
  }

  toggleMessage() {
    if (this.state.messageIsOpen === false) {
      this.setState({messageIsOpen: true});
    } else {
      this.setState({messageIsOpen: false});
    }
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
                <h2>My self-summary <button onClick={this.toggleSummary} className='profile-edit-button'></button></h2>
                <p className={(this.state.summaryIsOpen) ? 'hidden' : ''}>{this.state.user.summary || this.props.currentUser.summary}</p>
                <form onSubmit={this.handleSubmit} className={(this.state.summaryIsOpen) ? 'profile-input' : 'hidden'}>
                  <textarea name='user' onChange={this.handleInput('summary')} className='profile-input-text' rows='7'>
                    {`${this.state.user.summary || this.props.currentUser.summary}`}
                  </textarea>
                  <button onClick={this.toggleSummary} type='submit' value='submit' className='profile-submit-button'>Save</button>
                </form>
                <h2>What I'm doing with my life <button onClick={this.toggleDoing} className='profile-edit-button'></button></h2>
                <p className={(this.state.doingIsOpen) ? 'hidden' : ''}>{this.state.user.doing_with_life || this.props.currentUser.doing_with_life}</p>
                <form onSubmit={this.handleSubmit} className={(this.state.doingIsOpen) ? 'profile-input' : 'hidden'}>
                  <textarea name='user' onChange={this.handleInput('doing_with_life')} className='profile-input-text' rows='7'>
                    {`${this.state.user.doing_with_life || this.props.currentUser.doing_with_life}`}
                  </textarea>
                  <button onClick={this.toggleDoing} type='submit' value='submit' className='profile-submit-button'>Save</button>
                </form>
                <h2>I'm really good at <button onClick={this.toggleGood} className='profile-edit-button'></button></h2>
                <p className={(this.state.goodIsOpen) ? 'hidden' : ''}>{this.state.user.good_at || this.props.currentUser.good_at}</p>
                <form onSubmit={this.handleSubmit} className={(this.state.goodIsOpen) ? 'profile-input' : 'hidden'}>
                  <textarea name='user' onChange={this.handleInput('good_at')} className='profile-input-text' rows='7'>
                    {`${this.state.user.good_at || this.props.currentUser.good_at}`}
                  </textarea>
                  <button onClick={this.toggleGood} type='submit' value='submit' className='profile-submit-button'>Save</button>
                </form>
                <h2>Favorite books, movies, shows, music, and food <button onClick={this.toggleFav} className='profile-edit-button'></button></h2>
                <p className={(this.state.favIsOpen) ? 'hidden' : ''}>{this.state.user.fav_media || this.props.currentUser.fav_media}</p>
                <form onSubmit={this.handleSubmit} className={(this.state.favIsOpen) ? 'profile-input' : 'hidden'}>
                  <textarea name='user' onChange={this.handleInput('fav_media')} className='profile-input-text' rows='7'>
                    {`${this.state.user.fav_media || this.props.currentUser.fav_media}`}
                  </textarea>
                  <button onClick={this.toggleFav} type='submit' value='submit' className='profile-submit-button'>Save</button>
                </form>
                <h2>Six things I could never do without <button onClick={this.toggleSix} className='profile-edit-button'></button></h2>
                <p className={(this.state.sixIsOpen) ? 'hidden' : ''}>{this.state.user.six_things || this.props.currentUser.six_things}</p>
                <form onSubmit={this.handleSubmit} className={(this.state.sixIsOpen) ? 'profile-input' : 'hidden'}>
                  <textarea name='user' onChange={this.handleInput('six_things')} className='profile-input-text' rows='7'>
                    {`${this.state.user.six_things || this.props.currentUser.six_things}`}
                  </textarea>
                  <button onClick={this.toggleSix} type='submit' value='submit' className='profile-submit-button'>Save</button>
                </form>
                <h2>I spend a lot of time thinking about <button onClick={this.toggleThinking} className='profile-edit-button'></button></h2>
                <p className={(this.state.thinkingIsOpen) ? 'hidden' : ''}>{this.state.user.thinking_about || this.props.currentUser.thinking_about}</p>
                <form onSubmit={this.handleSubmit} className={(this.state.thinkingIsOpen) ? 'profile-input' : 'hidden'}>
                  <textarea name='user' onChange={this.handleInput('thinking_about')} className='profile-input-text' rows='7'>
                    {`${this.state.user.thinking_about || this.props.currentUser.thinking_about}`}
                  </textarea>
                  <button onClick={this.toggleThinking} type='submit' value='submit' className='profile-submit-button'>Save</button>
                </form>
                <h2>On a typical Friday night I am <button onClick={this.toggleFri} className='profile-edit-button'></button></h2>
                <p className={(this.state.friIsOpen) ? 'hidden' : ''}>{this.state.user.fri_night || this.props.currentUser.fri_night}</p>
                <form onSubmit={this.handleSubmit} className={(this.state.friIsOpen) ? 'profile-input' : 'hidden'}>
                  <textarea name='user' onChange={this.handleInput('fri_night')} className='profile-input-text' rows='7'>
                    {`${this.state.user.fri_night || this.props.currentUser.fri_night}`}
                  </textarea>
                  <button onClick={this.toggleFri} type='submit' value='submit' className='profile-submit-button'>Save</button>
                </form>
                <h2>You should message me if <button onClick={this.toggleMessage} className='profile-edit-button'></button></h2>
                <p className={(this.state.messageIsOpen) ? 'hidden' : ''}>{this.state.user.message_if || this.props.currentUser.message_if}</p>
                <form onSubmit={this.handleSubmit} className={(this.state.messageIsOpen) ? 'profile-input' : 'hidden'}>
                  <textarea name='user' onChange={this.handleInput('message_if')} className='profile-input-text' rows='7'>
                    {`${this.state.user.message_if || this.props.currentUser.message_if}`}
                  </textarea>
                  <button onClick={this.toggleMessage} type='submit' value='submit' className='profile-submit-button'>Save</button>
                </form>
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

            <div className='profile-body'>
              <div className='profile-text'>
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
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default UserProfile
