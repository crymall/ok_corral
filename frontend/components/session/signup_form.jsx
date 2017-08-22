import React from 'react';
import SignupFormContainer from './login_form_container';

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
      index: (this.state.ind + 1)
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
          I'm a <select>
                  <option value='straight'>Straight</option>
                  <option value='gay'>Gay</option>
                  <option value='bisexual'>Queer/Bisexual</option>
                </select>
                <select>
                  <option value='woman'>Man</option>
                  <option value='man'>Woman</option>
                  <option value='more'>Nonbinary Individual</option>
                </select>
          <input type='submit' value='Continue' />
        </form>
      </div>
    )

    const page2 = (
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
          <input type='submit' value='Continue' />
        </form>
      </div>
    )

    const page3 = (
      <div>
        {renderErrors}
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
      </div>
    )


    if (this.state.ind === 1) {
      return ({ page1 });
    }
    else if (this.state.ind === 2) {
      return ({ page2 });
    }
    else {
      return ({ page3 });
    }
  }

}
