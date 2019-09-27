class Hero < ApplicationRecord
  has_one :location
  validates :name, uniqueness: true, length: { in: 2..20 }
end
