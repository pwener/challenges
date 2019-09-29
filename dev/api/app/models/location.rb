class Location < ApplicationRecord
  # override method
  def as_json(options={})
    { latitude: latitude, longitude: longitude }
  end
end
