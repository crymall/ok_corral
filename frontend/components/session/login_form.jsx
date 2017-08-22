import React from 'react';
import LoginFormContainer from './login_form_container';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
    e.preventDefault;
    const user = {user: this.state};
    this.props.processForm(user);
  }

  handleInput(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
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
    return (
      <div>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input name="user" onChange={this.handleInput('username')} value={`${this.state.username}`} />
          </label>
          <label>
            Password
            <input name="password" type="password" onChange={this.handleInput('password')} value={`${this.state.password}`} />
          </label>
          <input type="submit" value='Sign In' />
        </form>
      </div>
    );
  }

}

export default LoginForm
