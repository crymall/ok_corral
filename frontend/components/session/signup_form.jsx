import React from 'react';
import merge from 'lodash/merge';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        email: '',
        password: '',
        zip: 0,
        age: 0,
        gender: 'woman',
        orientation: 'straight'
      },
      ind: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.incrementIndex = this.incrementIndex.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    const user = this.state.user;
    this.props.processForm(user);
  }

  handleInput(type) {
    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state, {user: {[type]: e.currentTarget.value}}))
  }

  incrementIndex(e) {
    e.preventDefault();

    const old_state = this.state;
    const next_ind = this.state.ind + 1

    this.setState(
      merge({}, old_state, {ind: next_ind})
    );
  }

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

    const page1 = (
      <form onSubmit={this.incrementIndex}>
        <p>
        Welcome to the best meet n&#39; greet this side of the Mississippi.
        We're pleased to meet you, and pleased to help you find your sweetheart.
        </p>

        <p>But first, we have to get down to brass tacks.</p>

        <p>You are a...</p>
        <select name='user' value={this.state.value} onChange={this.handleInput('orientation')}>
          <option value='straight'>Straight</option>
          <option value='gay'>Gay</option>
          <option value='bisexual'>Queer/Bisexual</option>
        </select>
        <select name='user' value={this.state.value} onChange={this.handleInput('gender', this)}>
          <option value='woman'>Woman</option>
          <option value='man'>Man</option>
          <option value='more'>Nonbinary Individual</option>
        </select>
        <button type='submit' value='submit'>Continue</button>
      </form>
    );

    const page2 = (
      <form onSubmit={this.incrementIndex}>
        <label>
          Username
          <input name='user' onChange={this.handleInput('username')} value={`${this.state.user.username}`} />
        </label>
        <label>
          Email Address
          <input name='user' onChange={this.handleInput('email')} value={`${this.state.user.email}`} />
        </label>
        <label>
          Password
          <input name='user' type='password' onChange={this.handleInput('password')} value={`${this.state.user.password}`} />
        </label>
        <button type='submit' value='submit'>Continue</button>
      </form>
    );

    const page3 = (
      <form onSubmit={this.handleSubmit}>
        <label>
          Zip Code
          <input name='user' onChange={this.handleInput('zip')} value={`${this.state.user.zip}`} />
        </label>
        <label>
          Age
          <input name='user' onChange={this.handleInput('age')} value={`${this.state.user.age}`} />
        </label>
        <button type='submit' value='submit'>Sign Up</button>
      </form>
    );

    if (this.state.ind === 1) {
      return (
        <div className="homepage-reg">
          <div className="homepage-body">
            <h1 className='front-head'>HOWDY, PARTNER.</h1>
            { this.renderErrors() }
            { page1 }
          </div>
        </div>
      );
    }
    else if (this.state.ind === 2) {
      return (
        <div className="homepage-reg">
          <div className="homepage-body">
            <h1 className='front-head'>ALMOST THERE...</h1>
            { this.renderErrors() }
            { page2 }
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="homepage-reg">
          <div className="homepage-body">
            <h1 className='front-head'>JUST ONE MORE.</h1>
            { this.renderErrors() }
            { page3 }
          </div>
        </div>
      );
    }
  }

}

export default SignupForm;
