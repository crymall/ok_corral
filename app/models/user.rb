class User < ApplicationRecord

##TODO: Make zip codes into strings to allow for leading zeroes (octal number issue)

validates :password, length: { minimum: 7, allow_nil: true}
validates :session_token, :username, :email, :password_digest, :zip,
  :age, :gender, :orientation, null: false

before_validation :ensure_session_token

geocoded_by :zip
after_validation :geocode, if: ->(obj){ obj.zip.present? and obj.zip_changed? }
acts_as_mappable :lat_column_name => :latitude, :lng_column_name => :longitude

attr_reader :password

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
