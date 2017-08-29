import React from 'react';
import { AnswerItem } from './answer_item';

class QuestionsIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const params = {user: {id: this.props.match.params.user_id}};
    this.props.fetchAllQuestions(params);
    this.props.fetchAllAnswers(params);
  }

  render() {
    if ((this.props.answers.length > 0) && (this.props.questions.length > 0)) {
      let pairs = {};
      this.props.questions.forEach((question) => pairs[question.id] = [question]);
      this.props.answers.forEach((answer) => pairs[answer.question_id].concat(answer));
      let answerItems = Object.keys(pairs).map((item) => {
          return <AnswerItem className='answer-item' question={pairs[item]} key={item} />
        });

      return(
        <div>
          {answerItems}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default QuestionsIndex
