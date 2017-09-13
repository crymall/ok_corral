import React from 'react';
import merge from 'lodash/merge';

class QuestionForm extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      answer: {
        answer_num: '',
        accepted_answers: '',
        importance: '4',
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

    this.setState(
      merge({}, old_state,
            {
              answer: {
                  question_id: this.props.question.id,
                  user_id: this.props.currentUser.id
                }
            }
          )
    );

  }

  handleSubmit(e) {

    e.preventDefault();
    const answer = {answer: this.state.answer};

    this.props.processForm(answer);

  }

  handleInput(type) {

    const old_state = this.state;

    return e => this.setState(
      merge({}, old_state,
            {
              answer: {
                [type]: e.currentTarget.value
              }
            }
          )
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

    return () => this.setState(
      merge({}, old_state,
            {
              answer: {
                accepted_answers: newAccepted
              }
            }
          )
        );

  }

  render() {

    let optionalAnswers = (
      <div>

        <input id='option-three'
               type='radio'
               name='answer'
               value='3'
               onChange={this.handleInput('answer_num')}
        />

        <label id='option-three' className='question-option'>
          {this.props.question.answer_three_text}
          <span></span>
        </label>

        <input id='option-four'
               type='radio'
               name='answer'
               value='4'
               onChange={this.handleInput('answer_num')}
        />

        <label id='option-four' className='question-option'>
          {this.props.question.answer_four_text}
          <span></span>
        </label>

      </div>
    );

    if (!this.props.question.answer_three_text) {
      optionalAnswers = null;
    } else if (!this.props.question.answer_four_text) {
      optionalAnswers = (
        <div>

          <input id='option-three'
                 type='radio'
                 name='answer'
                 value='3'
                 onChange={this.handleInput('answer_num')}
          />

          <label id='option-three' className='question-option'>
            {this.props.question.answer_three_text}
            <span></span>
          </label>

        </div>
      );
    }

    let optionalAcceptedAnswers = (
      <div>

        <input id='checkbox-three'
               type='checkbox'
               onClick={this.addAcceptedAnswer('3')}
        />

        <label id='checkbox-three' className='question-option'>
          {this.props.question.answer_three_text}
          <span></span>
        </label>

        <input id='checkbox-four'
               type='checkbox'
               onClick={this.addAcceptedAnswer('4')}
        />

        <label id='checkbox-four' className='question-option'>
          {this.props.question.answer_four_text}
          <span></span>
        </label>

      </div>
    );

    if (!this.props.question.answer_three_text) {
      optionalAcceptedAnswers = null;
    } else if (!this.props.question.answer_four_text) {
      optionalAcceptedAnswers = (
        <div>

          <input id='checkbox-three'
                 type='checkbox'
                 onClick={this.addAcceptedAnswer('3')}
          />

          <label id='checkbox-three' className='question-option'>
            {this.props.question.answer_three_text}
            <span></span>
          </label>

        </div>
      );
    }

    return(
      <div id='question-form-content'>

        <h2>Match Question</h2>

        <form onSubmit={this.handleSubmit} className='question-form'>
          <h2 className='question-text'>
            {this.props.question.question_text}
          </h2>
          <div className='first-question-block'>

            <input id='option-one'
                   type='radio'
                   name='answer'
                   value='1'
                   onChange={this.handleInput('answer_num')}
            />

            <label id='option-one' className='question-option'>
              {this.props.question.answer_one_text}
              <span></span>
            </label>

            <input id='option-two'
                   type='radio'
                   name='answer'
                   value='2'
                   onChange={this.handleInput('answer_num')}
            />

            <label id='option-two' className='question-option'>
              {this.props.question.answer_two_text}
              <span></span>
            </label>

            { optionalAnswers }

          </div>

          <h2 className='answer-subheading'>
            Answer(s) you'll accept
          </h2>
          <div className='question-block'>

            <input id='checkbox-one'
                   type='checkbox'
                   onClick={this.addAcceptedAnswer('1')}
            />

            <label id='checkbox-one' className='question-option'>
              {this.props.question.answer_one_text}
              <span></span>
            </label>

            <input id='checkbox-two'
                   type='checkbox'
                   onClick={this.addAcceptedAnswer('2')}
            />

            <label id='checkbox-two' className='question-option'>
              {this.props.question.answer_two_text}
              <span></span>
            </label>

            { optionalAcceptedAnswers }

          </div>

          <h2 className='answer-subheading'>
            Importance
          </h2>
            <div className='importance-meter'>
              <div className='importance-option'>
                <div
                  className={
                              (this.state.answer.importance <= 3) ?
                              'checked' :
                              'unchecked'
                            }
                  onClick={() => this.setState(
                                  merge({}, this.state,
                                    {
                                      answer: {
                                        importance: 3
                                      }
                                    }
                                  )
                                )
                              }
                >
                </div>

                <label id='little' className='importance-text'>
                  A little
                </label>

              </div>
              <div className='importance-option'>
                <div
                  className={
                              (this.state.answer.importance <= 2) ?
                              'checked' :
                              'unchecked'
                            }
                  onClick={() => this.setState(
                                  merge({}, this.state,
                                    {
                                      answer: {
                                        importance: 2
                                      }
                                    }
                                  )
                                )
                              }
                >
                </div>

                <label id='somewhat' className='importance-text'>
                  Somewhat
                </label>

              </div>
              <div className='importance-option'>
                <div
                  className={
                              (this.state.answer.importance <= 1) ?
                              'checked' :
                              'unchecked'
                            }
                  onClick={() => this.setState(
                                  merge({}, this.state,
                                    {
                                      answer: {
                                        importance: 1
                                      }
                                    }
                                  )
                                )
                              }
                >
                </div>

                <label id='very' className='importance-text'>
                  Very
                </label>

            </div>
          </div>

            <button type='submit'
                    value='submit'
                    className='question-submit-button'>
                      Answer
            </button>
        </form>
        
      </div>
    );
  }
}

export default QuestionForm;
