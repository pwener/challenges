FactoryBot.define do
  factory :admin do
    sequence(:email) { |n| "example#{n}@example.com" }
    sequence(:login) { |n| "admin#{n}" }
    password  { 'admin123' }
    password_confirmation  { 'admin123' }
  end
end
