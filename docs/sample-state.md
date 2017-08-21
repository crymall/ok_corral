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
  answers: {
    id: 1,
    answer_num: 2,
    accepted_answers: "1, 2, 4",
    importance: 3,
    question_id: 1,
    user_id: 1
  }
}
```
