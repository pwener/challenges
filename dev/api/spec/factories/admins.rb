FactoryBot.define do
  factory :admin do
    email     { 'example@example.com' }
    login     { 'admin' }
    password  { 'admin123' }
    password_confirmation  { 'admin123' }
  end
end
