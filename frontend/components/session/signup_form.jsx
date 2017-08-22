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

  

}
