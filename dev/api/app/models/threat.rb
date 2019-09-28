class Threat < ApplicationRecord
  has_one :location
  accepts_nested_attributes_for :location, :allow_destroy => true
  enum rank: { g: 0, s: 1, c: 2, w: 3 }
  validates :name, uniqueness: true, length: { in: 2..20 }
  validates :rank, presence: true
  validates :location, presence: true
end
