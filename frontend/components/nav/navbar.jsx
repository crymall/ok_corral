import React from 'react';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='auth-navbar'>
        <div className='auth-nav-text'>
          <p id='logo'>okc</p>
          <button className="signin-button" onClick={this.props.logout}>Logout</button>
        </div>
      </div>
    )
  }
}

export default Navbar;
