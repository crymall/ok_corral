# Sample State

```js
{
  currentUser: {
    id: 1,
    username: 'virgilearp'
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createMessage: {errors: ["body can't be blank"]},
    answerQuestion: {errors: ["please complete all required fields"]}
  },
  threads: {
    id: 1,
    update_time: "1503280698794"
  },
  messages: {
    id: 1,
    message_text: "sup",
    user_id: 1,
    thread_id: 1
  },
  questions: {
    id: 1,
    question_text: "what is a varmint?",
    answer_one_txt: "a rabbit",
    answer_two_txt: "a bandit",
    answer_three_txt: "a sheriff",
    answer_four_txt: "a breath mint"
  },
  answers: {
    id: 1,
    answer_num: 3,
    accepted_answers: "1, 3, 4",
    importance: 3,
    question_id: 1,
    user_id: 1
  }
}
```
