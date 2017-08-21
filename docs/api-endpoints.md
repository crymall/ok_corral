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
* `GET /api/users/:userId`
* `PATCH /api/users/:userId`

### Messages
* `GET /api/messages`
* `POST /api/messages`
* `GET /api/messages/:messageId`
* `PATCH /api/messages/:messageId`

### Questions
* `GET /api/messages`
* `GET /api/messages/:messageId`
* `PATCH /api/messages/:messageId`
