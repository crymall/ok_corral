class User < ApplicationRecord

  validates :password, length: { minimum: 7, allow_nil: true}
  validates :session_token, :username, :email, :password_digest, :zip,
    :age, :gender, :orientation, presence: true

  before_validation :ensure_session_token

  geocoded_by :zip
  after_validation :geocode, if: ->(obj){ obj.zip.present? and obj.zip_changed? }
  acts_as_mappable :lat_column_name => :latitude, :lng_column_name => :longitude

  has_many :answers,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Answer"

  has_many :messages,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Message"

  attr_reader :password

  def dialogues
    Dialogue.where(user_one_id: self.id).or(
      Dialogue.where(user_two_id: self.id)
    )
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return user if user && user.is_password?(password)

    nil
  end

  def preference
    if self.gender == "more" || self.orientation == "queer"
      return "all"
    elsif self.gender == "man"
      if self.orientation == "straight"
        return "woman"
      elsif self.orientation == "gay"
        return "man"
      end
    else
      if self.orientation == "straight"
        return "man"
      elsif self.orientation == "gay"
        return "woman"
      end
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_token
  end

end
