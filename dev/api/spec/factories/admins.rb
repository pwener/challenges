FactoryBot.define do
  factory :admin do
    email     { 'example@example.com' }
    login     { 'admin' }
    password  { 'admin123' }
  end
end