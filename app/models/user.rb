class User < ApplicationRecord

validates :password, length: { minimum: 7, allow_nil: true}
vaidates :session_token, :username, :email, :password_digest, :zip,
  :age, :gender, :orientation, null: false

before_validates :ensure_seesion_token

attr_reader :password

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)

  return user if user && user.is_password?(password)

  nil
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
