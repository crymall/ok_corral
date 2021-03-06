import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
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

  handleSubmit(e) {

    e.preventDefault();
    const user = this.state.user;

    this.props.processForm(user)
      .then(this.closeModal);

  }

  handleInput(type) {

    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state, {user: {
                                    [type]: e.currentTarget.value
                                  }
                            })
    );

  }

  handleSignout(e) {

    e.preventDefault();
    this.props.signOut()
      .then(() => {this.props.history.push('/')});

  }

  handleGuest(e) {

    e.preventDefault();

    this.props.processForm(
      {
        username: 'sampleuser',
        password: 'password'
      }
    ).then(this.closeModal);

  }

  //MODAL

  openModal() {

    this.props.clearErrors();
    this.setState({modalIsOpen: true});

  }

  closeModal() {

    this.props.clearErrors();
    this.setState({user: {
                          username: '',
                          password: ''
                        },
                   modalIsOpen: false
                  });

  }

  //ERRORS

  renderErrors() {

    if (this.props.errors) {
      return (
        <ul className="modal-error">
          {this.props.errors.map((error, idx) => {
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
        <div id='navbar'>
          <div className='nav-text'>
            <div className='left-side'>

              <Link to='/users/'>
                <p id='small-logo'>okc</p>
              </Link>
              <Link to='/users/'>
                <p className='left-menu-item'>Browse Matches</p>
              </Link>

            </div>
            <div className='nav-buttons'>
              <div className='tooltip'>

                <Link to={`/users/${this.props.currentUser.id}/messages`}>
                  <button className='messages-button'></button>
                </Link>
                <span className='tooltiptext'>
                  <div className='message-tooltip'>Messages</div>
                </span>

              </div>
              <div className='tooltip'>

                <Link to={`/users/${this.props.currentUser.id}/questions`}>
                  <button className='questions-button'></button>
                </Link>
                <span className='tooltiptext'>
                  <div className='question-tooltip'>Questions</div>
                </span>

              </div>
              <div className='tooltip'>

                <Link to={`/users/${this.props.currentUser.id}`}>
                  <button className='profile-button'></button>
                </Link>
                <span className='tooltiptext'>
                  <div className='profile-tooltip'>Profile</div>
                </span>

              </div>
              <div className='tooltip'>

                <button className='signout-button' onClick={this.handleSignout}></button>
                <span className='tooltiptext'>
                  <div className='logout-tooltip'>Log Out</div>
                </span>

              </div>
            </div>
          </div>
        </div>
      )
    } else {
      let errors = this.renderErrors();

      return (
        <div>
          <div id='auth-navbar'>
            <div className='auth-nav-text'>

              <p id='logo'>okcorral</p>

              <p>Have an account?
                <button className='signin-button' onClick={this.openModal}>
                  Sign In
                </button>
              </p>

            </div>
          </div>

          <Modal
            className='modal'
            overlayClassName='modal-backdrop'
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <div className='modal-content'>

              <p>Welcome Back</p>

              <form onSubmit={this.handleSubmit}>
                <div className='modal-form'>
                  <label className='modallabel'>
                    <input className='modalinput'
                           name='user'
                           onChange={this.handleInput('username')}
                           placeholder='Username'
                           value={`${this.state.user.username}`}
                    />
                  </label>
                  <label className='modallabel'>
                    <input className='modalinput'
                           name='password'
                           type='password'
                           onChange={this.handleInput('password')}
                           placeholder='Password'
                           value={`${this.state.user.password}`}
                    />
                  </label>

                </div>

                <button className='modalbutton'
                        type='submit'
                        value='submit'>
                          Sign In
                </button>
                <button className='modalbutton'
                        onClick={this.handleGuest}>
                          Guest Login
                </button>

                {errors}

              </form>

            </div>
        </Modal>

        </div>
      );
    }
  }

}


export default Navbar;
