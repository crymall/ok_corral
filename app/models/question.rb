class Question < ApplicationRecord

  validates :question_text, :answer_one_text, :answer_two_text, presence: true

  has_many :answers,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: "Answer"

end
