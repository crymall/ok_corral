# Component Hierarchy

**Homepage**
* AuthNavBar

**AuthFormContainer**
* AuthForm
* AuthNavBar

**UserIndex**
* UserIndexItem
* UserSearchForm
* NavBar

**UserDetailContainer**
* UserDetail
* NavBar

**MessageIndexContainer**
* MessageIndex
* NavBar

**MessageIndex**
* MessageIndexItem

**MessageDetailContainer**
* MessageDetail
* NavBar

**MessageDetail**
* MessageDetailItem
* MessageSubmitForm

**QuestionIndexContainer**
* QuestionIndex
* QuestionForm
* NavBar

**QuestionIndex**
* QuestionIndexItem

# Routes

| **Path**  | **Component** |
| ------------- | ------------- |
| '/'  | 'Homepage'  |
| '/sign-up'  | 'AuthFormContainer'  |
| '/sign-in'  | 'AuthFormContainer'  |
| '/users'  | 'UserIndex'  |
| '/user/:userId'  | 'UserDetailContainer'  |
| '/messages'  | 'MessageIndex'  |
| '/message/:messageId'  | 'MessageDetailContainer'  |
| '/questions'  | 'QuestionIndexContainer'  |
