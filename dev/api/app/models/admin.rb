class Admin < ApplicationRecord
  before_create :generate_authentication_token!
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :auth_token, uniqueness: true
  validates :login, presence: true, length: { in: 2..25 }

  def generate_authentication_token!
    while self.class.exists?(auth_token: auth_token)
      self.auth_token = Devise.friendly_token
    end
  end
end
