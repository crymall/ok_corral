import React from 'react';

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
        gender: '',
        orientation: ''
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
    e.preventDefault;
    const user = {user: this.state.user};
    this.props.processForm(user);
  }

  handleInput(type) {
    return e => this.setState({
      user: {
        [type]: e.currentTarget.value
      }
    });
  }

  incrementIndex() {
    return e => this.setState({
      ind: (this.state.ind + 1)
    })
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
        I'm a <select name='user' onChange={this.handleInput('orientation')}>
                <option value='straight'>Straight</option>
                <option value='gay'>Gay</option>
                <option value='bisexual'>Queer/Bisexual</option>
              </select>
              <select name='user' onChange={this.handleInput('gender')}>
                <option value='woman'>Woman</option>
                <option value='man'>Man</option>
                <option value='more'>Nonbinary Individual</option>
              </select>
        <input type='submit' value='Continue' />
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
        <input type='submit' value='Continue' />
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
        <input type='submit' value='Sign Up' />
      </form>
    );

    if (this.state.ind === 1) {
      return (
        <div>
          { this.renderErrors() }
          { page1 }
        </div>
      );
    }
    else if (this.state.ind === 2) {
      return (
        <div>
          { this.renderErrors() }
          { page2 }
        </div>
      );
    }
    else {
      return (
        <div>
          { this.renderErrors() }
          { page3 }
        </div>
      );
    }
  }

}

export default SignupForm;
