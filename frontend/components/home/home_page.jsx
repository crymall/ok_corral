import React from 'react';
import SignupFormContainer from '../session/signup_form_container';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Howdy, partner.</h1>
        <SignupFormContainer />
      </div>
    )
  };
}

export default HomePage;
