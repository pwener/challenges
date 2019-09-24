require 'rails_helper'

RSpec.describe AdminsController, type: :controller do
  describe "GET #show" do
    before(:each) do
      @admin = FactoryBot.create :admin
      get :show, params: { id: @admin.id }, format: :json
    end

    it "returns the information about admin" do
      admin_response = JSON.parse(response.body, symbolize_names: true)
      expect(admin_response[:email]).to eql @admin.email
    end

    it { expect(response).to have_http_status(200)}
  end
end
