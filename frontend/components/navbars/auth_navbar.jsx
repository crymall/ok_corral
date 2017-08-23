import React from 'react';

class AuthNavbar extends React.Component {
    render() {
      return (
        <div id='auth-navbar'>
          <div className='auth-nav-text'>
            <p id='logo'>okcorral</p>
            <p>Have an account? <button className="signin-button">Sign In</button></p>
          </div>
        </div>
      );
    };
}

export default AuthNavbar;
