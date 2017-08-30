import React from 'react';
import merge from 'lodash/merge';

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: {
        answer_num: '',
        accepted_answers: '',
        importance: '',
        question_id: '',
        user_id: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addAcceptedAnswer = this.addAcceptedAnswer.bind(this);
  }

  componentDidMount() {
    const old_state = this.state;

    this.setState(merge({}, old_state, {answer: {question_id: this.props.question.id,
      user_id: this.props.currentUser.id}}));
  }

  handleSubmit(e) {
    e.preventDefault();
    const answer = {answer: this.state.answer};
    this.props.processForm(answer);
  }

  handleInput(type) {
    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state, {answer: {[type]: e.currentTarget.value}})
    );
  }

  addAcceptedAnswer(answer) {
    let accepted = this.state.answer.accepted_answers;
    let old_state = this.state;
    let newAccepted;

    if (accepted.includes(answer)) {
      newAccepted = accepted.split(answer).join('');
    } else {
      newAccepted = accepted.concat(answer);
    }

    return () => this.setState(merge({}, old_state, {answer: {accepted_answers: newAccepted}}));
  }

  render() {
    let optionalAnswers = (
      <div>
        <label className='question-option'>
          {this.props.question.answer_three_text}
          <input type='radio' name='answer' value='3' onChange={this.handleInput('answer_num')}/>
        </label>
        <label className='question-option'>
          {this.props.question.answer_four_text}
          <input type='radio' name='answer' value='4' onChange={this.handleInput('answer_num')}/>
        </label>
      </div>
    );

    if (!this.props.question.answer_three_text) {
      optionalAnswers = null;
    } else if (!this.props.question.answer_four_text) {
      optionalAnswers = (
        <label className='question-option'>
          {this.props.question.answer_three_text}
          <input type='radio' name='answer' value='3' onChange={this.handleInput('answer_num')}/>
        </label>
      );
    }

    let optionalAcceptedAnswers = (
      <div>
        <label className='question-option'>
          {this.props.question.answer_three_text}
          <input type='checkbox' onClick={this.addAcceptedAnswer('3')}/>
        </label>
        <label className='question-option'>
          {this.props.question.answer_four_text}
          <input type='checkbox' onClick={this.addAcceptedAnswer('4')}/>
        </label>
      </div>
    );

    if (!this.props.question.answer_three_text) {
      optionalAcceptedAnswers = null;
    } else if (!this.props.question.answer_four_text) {
      optionalAcceptedAnswers = (
        <label className='question-option'>
          {this.props.question.answer_three_text}
          <input type='checkbox' onClick={this.addAcceptedAnswer('3')}/>
        </label>
      );
    }

    return(
      <div id='question-form-content'>
        <h2>Answer Question</h2>
        <form onSubmit={this.handleSubmit} className='question-form'>
          <h2 className='question-text'>{this.props.question.question_text}</h2>
            <label className='question-option'>
              {this.props.question.answer_one_text}
              <input type='radio' name='answer' value='1' onChange={this.handleInput('answer_num')}/>
            </label>
            <label className='question-option'>
              {this.props.question.answer_two_text}
              <input type='radio' name='answer' value='2' onChange={this.handleInput('answer_num')}/>
            </label>
            { optionalAnswers }

          <h2 className='answer-subheading'>Answer(s) you'll accept</h2>
            <label className='question-option'>
              {this.props.question.answer_one_text}
              <input type='checkbox' onClick={this.addAcceptedAnswer('1')}/>
            </label>
            <label className='question-option'>
              {this.props.question.answer_two_text}
              <input type='checkbox' onClick={this.addAcceptedAnswer('2')}/>
            </label>
            { optionalAcceptedAnswers }

          <h2 className='answer-subheading'>Importance</h2>
            <label className='importance-option'>
              <input type='radio' name='importance' value='3' onChange={this.handleInput('importance')}/>
              A little
            </label>
            <label className='importance-option'>
              <input type='radio' name='importance' value='2' onChange={this.handleInput('importance')}/>
              Somewhat
            </label>
            <label className='importance-option'>
              <input type='radio' name='importance' value='1' onChange={this.handleInput('importance')}/>
              Very
            </label>
            <button type='submit' value='submit' className='profile-submit-button'>Answer</button>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
