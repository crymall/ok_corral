class Message < ApplicationRecord
  validates :user, :thread, :body, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :thread,
    primary_key: :id,
    foreign_key: :thread_id,
    class_name: "Thread"

end
