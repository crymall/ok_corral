# API Endpoints

## HTML API

### Root
* `GET /`
  * loads React web app

## JSON API

### Users
* `GET /api/users`
  * Users index/search
  * Accepts 'distance' and 'age' params to sort users
  * Accepts pagination params (time providing)
* `POST /api/users`
  * Creates new user
* `GET /api/users/:userId`
  * Fetches single existing user
* `PATCH /api/users/:userId`
  * Allows user to update their profile

### Session
* `POST /api/session`
  * Creates new session on user login
* `DELETE /api/session`
  * Deletes session on user logout

### Threads
* `POST /api/threads`
  * Creates new message thread between two users
* `GET /api/threads`
  * Threads index
* `GET /api/threads/:thread_id`
  * Fetches specific message thread

### Messages
* `GET /api/threads/:thread_id/messages`
  * Messages index for thread
* `POST /api/threads/:thread_id/messages`
  * Creates new message in thread

### Questions
* `GET /api/questions`
  * Questions index
* `GET /api/questions/:questionId`
  * Fetches single question for form

### Answers
*Answers are required in order to compare users for matching*
* `POST /api/answer`
  * User answers a specific question
* `GET /api/answers`
  * Answers are fetched for user compatibility
* `PATCH /api/answers/:answerId`
  * User can change their answers
