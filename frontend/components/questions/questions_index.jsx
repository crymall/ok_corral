import React from 'react';
import { AnswerItem } from './answer_item';
import QuestionFormContainer from './question_form_container';

class QuestionsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  componentDidMount() {
    const params = {user: {id: this.props.match.params.user_id}};
    this.props.fetchAllAnswers(params);
    this.props.fetchAllQuestions(params);
  }

  render() {
    let answerItems;
    let unansweredItems;
    let user = parseInt(this.props.match.params.user_id)

    if ((this.props.answers.length > 0) && (this.props.answers[0].user_id === user) && (this.props.answeredQuestions.length > 0)) {
      let pairs = {};

      this.props.answeredQuestions.forEach((question) => pairs[question.id] = [question]);
      this.props.answers.forEach((answer) => {
        if (answer.user_id === user){
          pairs[answer.question_id].push(answer);
        }
      });

      answerItems = Object.keys(pairs).map((item) => {
          return <AnswerItem className='answer-item-container' question={pairs[item]} key={item} />
        });

    } else {
      answerItems = null;
    }
    if ((this.props.unansweredQuestions.length > 0) && (parseInt(this.props.match.params.user_id) === this.props.currentUser.id)) {
      unansweredItems = this.props.unansweredQuestions.map((question) => {
                          return <QuestionFormContainer className='question-form-container' question={question} key={question.id} />
                        });
    } else {
      unansweredItems = [[]];
    }

    return (
        <div id='questions-index-container'>
          <div id='questions-index'>
            { unansweredItems[0] }
            <h2>Answered Questions</h2>
            <div className='answers-list'>
              { answerItems }
            </div>
          </div>
        </div>
      );
    }
}

export default QuestionsIndex;
