import React from 'react';
import SignupFormContainer from './login_form_container';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    let pageIndex = 1;

    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        zip: 0,
        age: 0,
        gender: "",
        orientation: ""
      },
      index: 1
    }
  }

  componentDidMount() {
    this.clearErrors();
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
      index: (this.state.index + 1)
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
      <div>
        {renderErrors}
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
        </form>
      </div>
    )
  }

}
