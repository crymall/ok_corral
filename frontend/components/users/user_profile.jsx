import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';
import keys from 'lodash/keys';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.user_id);
  }

  render() {
    if (!this.props.user && !this.props.currentUser) {
      return <div></div>;
    } else {
      if (!this.props.user) {
        return (
          <div>
            <h1>{this.props.currentUser.username}</h1>
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
