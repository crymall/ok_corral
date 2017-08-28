class Answer < ApplicationRecord

  validates :answer_num, :accepted_answers, :importance, :question, :user, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: "Question"

end
