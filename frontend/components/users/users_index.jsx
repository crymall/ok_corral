import React from 'react';
import { UserItem } from './user_item';
import merge from 'lodash/merge';
import keys from 'lodash/keys';
import DotLoader from 'halogen/DotLoader';

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
      distanceIsOpen: false,
      loading: true
    }

    this.matches = this.matches.bind(this);
    this.sameState = this.sameState.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleAgesForm = this.toggleAgesForm.bind(this);
    this.toggleDistanceForm = this.toggleDistanceForm.bind(this);
    this.closeForms = this.closeForms.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.answersInCommon = this.answersInCommon.bind(this);
    this.matchPercentage = this.matchPercentage.bind(this);

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

    setTimeout(() => this.setState({loading: false}), 500);

    this.matches();

  }

  componentDidUpdate(prevProps, prevState) {

    if (this.sameState(prevState) === false) {
      setTimeout(() => this.matches(), 700);
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

    if (this.state.distanceIsOpen === false &&
        this.state.ageIsOpen === true) {
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

  handleClick(e) {

    e.stopPropagation();

  }

  //MATCHING

  answersInCommon(user) {

    let commonAnswers = [];

    if (this.props.currentUser.answers && user.answers) {
      this.props.currentUser.answers.forEach((answer) => {
        user.answers.forEach((answer2) => {
          if (answer.question_id === answer2.question_id) {
            commonAnswers.push([answer, answer2]);
          }
        });
      });
    } else {
      return null;
    }

    return commonAnswers;

  }

  matchPercentage(user) {

    let myMatch = 50;
    let theirMatch = 50;
    let commonAnswers = this.answersInCommon(user);

    if (commonAnswers.length > 0) {
      let numberInCommon = commonAnswers.length;

      commonAnswers.forEach((answerPair) => {
        if (!answerPair[0].accepted_answers.includes
              (answerPair[1].answer_num.toString())) {
                  myMatch = (myMatch - (50/numberInCommon/answerPair[0].importance)
              );
        } else if
            (!answerPair[1].accepted_answers.includes
              (answerPair[0].answer_num.toString()))
                  theirMatch = (theirMatch - (50/numberInCommon/answerPair[1].importance)
              );
      })

      return (Math.round(myMatch + theirMatch));
    } else {
      return 0;
    }

  }



  render() {

    if (!this.state.loading) {
      if (this.props.users) {
        let users = this.props.users
          .map((user, idx) => {
            return <UserItem className='user-item'
                             user={user}
                             match={this.matchPercentage(user)}
                             key={user.id}
                   />
               });

        users = users.sort((a, b) => {
                  return (b.props.match - a.props.match)
                });

        return (
          <div className='search-index'>
            <div className='users-search' onClick={this.closeForms}>

              <p className='search-text'>
                Showing users ages
              </p>

              <div>

                <a className='age-link'
                   onClick={this.toggleAgesForm}
                >
                  {this.state.user.age_min} to {this.state.user.age_max}
                </a>

                <form onClick={this.handleClick}
                      className={(this.state.ageIsOpen) ?
                                 'age-search-form' : 'hidden'}
                >
                  <label className='search-item'>
                    Ages
                    <div className='inputs'>
                      <input name='user'
                             className='age-input'
                             placeholder='min'
                             onChange={this.handleInput('age_min')}
                             value={this.state.user.age_min}>
                      </input>
                      <div className='to'>
                        to
                      </div>
                      <input name='user'
                             className='age-input'
                             placeholder='max'
                             onChange={this.handleInput('age_max')}
                             value={this.state.user.age_max}>
                      </input>

                    </div>

                  </label>
                </form>

              </div>

              <p className='search-text'>
                within
              </p>

              <div>
                <a className='dist-link'
                   onClick={this.toggleDistanceForm}
                >
                  {this.state.user.distance} miles
                </a>

                <form onClick={this.handleClick}
                      className={(this.state.distanceIsOpen) ?
                      'dist-search-form' : 'hidden'}
                >
                  <label className='dist-search-item'>
                    Distance
                    <input className='dist-input'
                           name='user'
                           type='range'
                           name='distance'
                           onChange={this.handleInput('distance')}
                           min='5'
                           max='50'
                           value={this.state.user.distance}>
                    </input>
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
    } else {
      return <DotLoader className='loader'
                        color='#ff9f1c'
                        size='30px'
                        margin='4px'
             />;
    }
  }
  
}

export default UsersIndex;
