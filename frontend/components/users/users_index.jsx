import React from 'react';
import { UserItem } from './user_item';
import merge from 'lodash/merge';
import keys from 'lodash/keys';

class UsersIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      age_min: 18,
      age_max: 100,
      distance: 10
    }

    this.matches = this.matches.bind(this);
    this.sameState = this.sameState.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  matches() {
    const params = {user: this.state}
    return this.props.fetchAllUsers(params);
  }

  sameState(prevState) {
    let state = this.state;
    let answer = true;

    keys(this.state).forEach((key) => {
      if (parseInt(state[key]) !== parseInt(prevState[key])) {
        answer = false;
      }
    });

    return answer;
  }

  componentDidMount() {
    this.matches();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.sameState(prevState) === false) {
      this.matches();
    }
  }

  handleInput(type) {
    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state, {[type]: e.currentTarget.value})
    )
  }

  render() {
    if (this.props.users) {
      let users = this.props.users
        .map((user, idx) => {return <UserItem className='user-item' user={user} />})

      return (
        <div className='search-index'>

          <div className='users-search'>
            <form className='search-form'>
              <label>
                Age:
                <input name='user' className='age-input' placeholder='min' onChange={this.handleInput('age_min')} value={this.state.age_min}></input> -
                <input name='user' className='age-input' placeholder='max' onChange={this.handleInput('age_max')} value={this.state.age_max}></input>
              </label>
              <label>
                Distance:
                <input name='user' type='range' name='distance' onChange={this.handleInput('distance')} min='5' max='50' value={this.state.distance}></input>
              </label>
            </form>
          </div>

          <div className='users-index'>
            <div className='user-items'>
              {users}
            </div>
          </div>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default UsersIndex;
