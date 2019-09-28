FactoryBot.define do
  factory :hero do
    name { "Saitama" }
    rank { "s" }
    location { FactoryBot.create :location }
  end
end
