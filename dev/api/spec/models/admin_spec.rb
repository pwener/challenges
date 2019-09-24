require 'rails_helper'

RSpec.describe Admin, type: :model do
  before { @admin = FactoryBot.build(:admin) }

  subject { @admin }

  it { should respond_to(:email) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }

  it { should be_valid }
end
