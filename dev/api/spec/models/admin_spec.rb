require 'rails_helper'

RSpec.describe Admin, type: :model do
  before { @admin = FactoryBot.build(:admin) }

  subject { @admin }

  it { should respond_to(:auth_token) }
  it { should respond_to(:email) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }
  it { should be_valid }

  describe "when email is not present" do
    before { @admin.email = " " }
    it { expect(@admin).to_not be_valid }
  end

  describe "when password is short" do
    before { @admin.password = "adm" }
    it { expect(@admin).to_not be_valid }
  end

  describe "when login is invalid" do
    before { @admin.login = " " }
    it { expect(@admin).to_not be_valid}
  end
end
