import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user_id: '',
      dialogue_id: '',
      body: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.setState({user_id: this.props.currentUser.id, dialogue_id: this.props.dialogue.id});
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = {message: this.state};
    this.props.processForm(message);
    this.props.fetchSingleDialogue({id: parseInt(this.state.dialogue_id)});
  }

  handleInput(type) {
    return e => this.setState({[type]: e.currentTarget.value});
  }

  render() {
    return (
      <div className='message-form-container'>
        <h2>New Message</h2>
        <form onSubmit={this.handleSubmit} className='message-form'>
          <textarea name='message' onChange={this.handleInput('body')} className='message-input-text' rows='7'>

          </textarea>
          <button type='submit' value='submit' className='question-submit-button'>Send</button>
        </form>
      </div>
    )
  }

}

export default MessageForm;
