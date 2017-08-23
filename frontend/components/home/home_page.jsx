import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import AuthNavbar from '../navbars/auth_navbar';

class HomePage extends React.Component {
  render() {
    return (
      <div id='home-page'>
        <AuthNavbar />
        <SignupFormContainer />
      </div>
    )
  };
}

export default HomePage;
