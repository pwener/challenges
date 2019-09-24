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

  describe "POST #create" do

    context "when is successfully created" do

      before(:each) do
        @admin_attr = FactoryBot.attributes_for :admin
        post :create, { admin: @admin_attr }, format: :json
      end

      it "renders the json of admin" do
        admin_response = JSON.parse(response.body, symbolize_names: true)
        expect(admin_response[:email]).to eql @user_attributes[:email]
      end

      it { expect(response).to have_http_status(201) }

    end

    context "when is not created" do
      before(:each) do
        @invalid_admin_attrs = { login: '12344', password: 'adm123456' }
        post :create, { admin: @invalid_admin_attrs }, format: :json
      end

      it "render json errors" do
        user_response = JSON.parse(response.body, symbolize_names: true)
        expect(user_response[:errors][:email]).to include "can't be blank"
      end

      it { expect(response).to have_http_status(422)}
    end
  end

end
