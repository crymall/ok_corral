# OKCorral

[Trello][trello]

[trello]: https://trello.com/b/lJYufajq/okcorral

# Minimum Viable Product

OKCorral is a Western-themed clone of OKCupid, built using Ruby on Rails and React/Redux.
By the end of the production period, this app will, at a minimum, satisfy the following criteria:

* Hosting on Heroku
* New user account creation, login, and demo login
* Browsing and searching other users by location, age, and 'looking for' data
* Personality questions
* Match percentages based on question answers

# Design Docs

* [View Wireframes](./wireframes)
* [React Components](./components.md)
* [API Endpoints](./endpoints.md)
* [DB Schema](./schema.md)
* [Sample State](./sample-state.md)

# Implementation Timeline

## Phase 1: Backend setup and Frontend User Authentication (2 days)
* **Objective:** Functioning rails project with frontend authentication

## Phase 2: User Model, API, Search, and Components (2 days)
* **Objective:** Users can be created, indexed, searched for, and viewed individually. User attributes can be edited by that user.

## Phase 3: Questions, Answers, and Matching (3 days)
* **Objective:** Questions can be indexed and responded to. Answers are available to calculate match percentages. Match percentages appear on user profiles and index items.

## Phase 4: Threads and Messaging (2 days)
* **Objective:** Threads can be created, indexed, and replied to through messages.

## Phase 5: Advanced Search/Pagination for Users Index (1 day)
* **Objective:** Add pagination/infinite scroll to users index. Add search by more parameters (username, summary, etc.).

## Bonus Features (TBD)
* User can block other users.
* Implementation of OKCupids "DoubleTake" feature.
* Messages can be searched/sorted.
* Advanced User attributes (astrological sign, smoker, pets, etc.).
