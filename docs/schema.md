# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
zip             | integer   | not null
age             | integer   | not null
gender          | string    | not null
orientation     | string    | not null
summary         | text      |
doing_with_life | text      |
good_at         | text      |
fav_media       | text      |
six_things      | text      |
thinking_about  | text      |
fri_night       | text      |
message_if      | text      |

*user has many messages, many threads through messages,*
*many answers*

## threads
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
update_time     | string    | not null

*threads have many messages, belong to user through messages*

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
message_text    | text      | not null
user_id         | integer   | not null, foreign key
thread_id       | integer   | not null, foreign key

*messages belong to threads and users*

## questions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_text   | string    | not null
answer_one_txt  | string    | not null
answer_two_txt  | string    | not null
answer_three_txt| string    |
answer_four_txt | string    |

*questions have many answers*

## answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
answer_num      | integer   | not null
accepted_answers| string    | not null
importance      | integer   | not null
question_id     | integer   | not null, foreign key
user_id         | integer   | not null, foreign key

*answers belong to questions, users*
