import React from 'react';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class Navbar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      user: {
        username: '',
        password: ''
      },
      modalIsOpen: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

//INPUT

  componentDidMount() {
    this.props.clearErrors();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser) {
  //     this.props.history.push('/users');
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user;
    debugger;
    this.props.processForm(user)
      .then(this.closeModal);
  }

  handleInput(type) {
    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state, {user: {[type]: e.currentTarget.value}}))
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.signOut()
      .then(() => {this.props.history.push('/')});
  }

  handleGuest(e) {
    e.preventDefault();
    this.props.processForm({
      username: 'reed',
      password: 'password'
    }).then(this.closeModal);
  }

  //MODAL

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  //ERRORS

  renderErrors() {
    if (this.props.errors.responseJSON) {
      return (
        <ul>
          {this.props.errors.responseJSON.map((error, idx) => {
            return (
              <li key={`error-${idx}`}>
                {error}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return null;
    }
  }

  render() {
    if (this.props.currentUser) {
      return(
        <div id='auth-navbar'>
          <div className='auth-nav-text'>
            <p id='logo'>okc</p>
            <button className="signin-button" onClick={this.handleSignout}>Logout</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>

          <div id='auth-navbar'>
            <div className='auth-nav-text'>
              <p id='logo'>okcorral</p>
              <p>Have an account? <button className="signin-button" onClick={this.openModal}>Sign In</button></p>
            </div>
          </div>

          <Modal
            className='modal'
            overlayClassName='modal-backdrop'
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <div className='modal-content'>
              <p>Welcome Back</p>
              <form onSubmit={this.handleSubmit}>
                <div className='modal-form'>
                  <label className='modallabel'>
                    <input className='modalinput' name='user' onChange={this.handleInput('username')} placeholder='Username' value={`${this.state.user.username}`} />
                  </label>
                  <label className='modallabel'>
                    <input className='modalinput' name='password' type='password' onChange={this.handleInput('password')} placeholder='Password' value={`${this.state.user.password}`} />
                  </label>
                </div>
                <button className='modalbutton' type='submit' value='submit'>Sign In</button>
                <button className='modalbutton' onClick={this.handleGuest}>Guest Login</button>
              </form>
            </div>
        </Modal>

        </div>
      );
    }
  }

}


export default Navbar;
