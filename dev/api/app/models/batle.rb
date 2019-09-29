class Batle < ApplicationRecord
  belongs_to :threat
  has_and_belongs_to_many :heroes

  # override method
  def as_json(options={})
    { finished: finished, successful: successful, heroes: heroes, threat: threat }
  end
end
