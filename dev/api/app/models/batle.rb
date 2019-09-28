class Batle < ApplicationRecord
  belongs_to :threat
  has_and_belongs_to_many :heroes
end
