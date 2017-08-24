import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';

class HomePage extends React.Component {
  render() {
    return (
      <div id='home-page'>
        <LoginFormContainer />
        <SignupFormContainer />
      </div>
    )
  };
}

export default HomePage;
