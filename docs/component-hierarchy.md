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

**ThreadIndexContainer**
* ThreadIndex
* NavBar

**ThreadIndex**
* ThreadIndexItem

**ThreadDetailContainer**
* ThreadDetail
* NavBar

**ThreadDetail**
* MessageIndex
* MessageSubmitForm

**MessageIndex**
* MessageIndexItem

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
| '/users/:userId'  | 'UserDetailContainer'  |
| '/threads'  | 'ThreadIndex'  |
| '/messages/:threadId'  | 'ThreadDetailContainer'  |
| '/questions'  | 'QuestionIndexContainer'  |
