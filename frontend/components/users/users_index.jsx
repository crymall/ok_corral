import React from 'react';
import onClickOutside from 'react-onclickoutside'
import { UserItem } from './user_item';
import merge from 'lodash/merge';
import keys from 'lodash/keys';

class UsersIndex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        age_min: 18,
        age_max: 100,
        distance: 10
      },
      ageIsOpen: false,
      distanceIsOpen: false
    }

    this.matches = this.matches.bind(this);
    this.sameState = this.sameState.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleAgesForm = this.toggleAgesForm.bind(this);
    this.toggleDistanceForm = this.toggleDistanceForm.bind(this);
    this.closeForms = this.closeForms.bind(this);
  }

  matches() {
    const params = {user: this.state.user};
    return this.props.fetchAllUsers(params);
  }

  sameState(prevState) {
    let state = this.state.user;
    let answer = true;

    keys(state).forEach((key) => {
      if (parseInt(state[key]) !== parseInt(prevState.user[key])) {
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
      merge({}, old_state, {user: {[type]: e.currentTarget.value}})
    );
  }

  //MODALS

  toggleAgesForm() {
    if (this.state.ageIsOpen === false && this.state.distanceIsOpen === true) {
      this.setState({ageIsOpen: true, distanceIsOpen: false});
    } else if (this.state.ageIsOpen === false) {
      this.setState({ageIsOpen: true});
    } else {
      this.setState({ageIsOpen: false});
    }
  }

  toggleDistanceForm() {
    if (this.state.distanceIsOpen === false && this.state.ageIsOpen === true) {
      this.setState({distanceIsOpen: true, ageIsOpen: false});
    } else if (this.state.distanceIsOpen === false) {
      this.setState({distanceIsOpen: true});
    } else {
      this.setState({distanceIsOpen: false});
    }
  }

  closeForms() {
    if (this.state.ageIsOpen) {
      this.setState({ageIsOpen: false});
    } else if (this.state.distanceIsOpen) {
      this.setState({distanceIsOpen: false});
    }
  }

  handleClickOutside() {
    this.setState({ageIsOpen: false});
    this.setState({distanceIsOpen: false});
  }

  render() {
    if (this.props.users) {
      let users = this.props.users
        .map((user, idx) => {return <UserItem className='user-item' user={user} key={user.id}/>})

      return (
        <div className='search-index'>
          <div className='users-search'>
            <p className='search-text'>
              Showing users ages
            </p>

            <div>
              <a className='age-link' onClick={this.toggleAgesForm}>{this.state.user.age_min} to {this.state.user.age_max}</a>

              <form className={(this.state.ageIsOpen) ? 'age-search-form' : 'hidden'}>
                <label className='search-item'>
                  Ages
                  <div className='inputs'>
                    <input name='user' className='age-input' placeholder='min' onChange={this.handleInput('age_min')} value={this.state.user.age_min}></input> —
                    <input name='user' className='age-input' placeholder='max' onChange={this.handleInput('age_max')} value={this.state.user.age_max}></input>
                  </div>
                </label>
              </form>
            </div>

            <p className='search-text'>
              within
            </p>

            <div>
              <a className='dist-link' onClick={this.toggleDistanceForm}>{this.state.user.distance} miles</a>

              <form className={(this.state.distanceIsOpen) ? 'dist-search-form' : 'hidden'}>
                <label className='search-item'>
                  Distance
                  <input className='dist-input' name='user' type='range' name='distance' onChange={this.handleInput('distance')} min='5' max='50' value={this.state.user.distance}></input>
                </label>
              </form>
            </div>
            <p className='search-text'>
              of your location
            </p>
          </div>

          <div className='users-index' onClick={this.closeForms}>
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

export default onClickOutside(UsersIndex);
