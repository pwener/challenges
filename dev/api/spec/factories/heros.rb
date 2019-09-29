FactoryBot.define do
  factory :hero do
    name { "Saitama" }
    rank { "s" }
    location_attributes { {latitude: 0, longitude: 0} }
  end
end
