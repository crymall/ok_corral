class Thread < ApplicationRecord
  validates :user_one, :user_two, presence: true;

  belongs_to :user_one,
    primary_key: :id,
    foreign_key: :user_one_id,
    class_name: "User"

  belongs_to :user_two,
    primary_key: :id,
    foreign_key: :user_two_id,
    class_name: "User"

  has_many :messages,
    primary_key: :id,
    foreign_key: :thread_id,
    class_name: "Message"
    
end
