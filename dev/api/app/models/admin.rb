class Admin < ApplicationRecord
  acts_as_token_authenticatable

  validates :login, presence: true
  validates :email, presence: true
end
