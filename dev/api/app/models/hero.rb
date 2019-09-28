class Hero < ApplicationRecord
  has_one :location
  accepts_nested_attributes_for :location, :allow_destroy => true
  enum rank: { s: 0, a: 1, b: 2, c: 3 }
  validates :name, uniqueness: true, length: { in: 2..20 }
end
