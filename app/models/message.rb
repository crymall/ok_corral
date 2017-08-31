class Message < ApplicationRecord
  validates :user, :dialogue, :body, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :dialogue,
    primary_key: :id,
    foreign_key: :dialogue_id,
    class_name: "Dialogue"

end
