import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from '../session/login_form_container';

class AuthNavbar extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

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
