require 'rails_helper'

RSpec.describe AdminsController, type: :controller do

  def object_response(body)
    JSON.parse(body, symbolize_names: true)
  end

  describe "GET #show" do
    before(:each) do
      @admin = FactoryBot.create :admin
      get :show, params: { id: @admin.id }, format: :json
    end

    it "returns the information about admin" do
      admin_response = object_response(response.body)
      expect(admin_response[:email]).to eql @admin.email
    end

    it { expect(response).to have_http_status(200)}
  end

  describe "POST #create" do

    context "when is successfully created" do

      before(:each) do
        @admin_attr = FactoryBot.attributes_for :admin
        post :create, params: { admin: @admin_attr }, format: :json
      end

      it "renders the json of admin" do
        admin_response = object_response(response.body)
        expect(admin_response[:email]).to eql @admin_attr[:email]
      end

      it { expect(response).to have_http_status(201) }

    end

    context "when is not created" do
      before(:each) do
        @invalid_admin_attrs = { login: '12344', password: 'adm123456' }
        post :create, params: { admin: @invalid_admin_attrs }, format: :json
      end

      it "render json errors" do
        admin_response = object_response(response.body)
        expect(admin_response[:errors][:email]).to include "can't be blank"
      end

      it { expect(response).to have_http_status(422)}
    end
  end

  describe "PUT #update" do

    context "when admin is successfully updated" do
      before(:each) do
        @admin = FactoryBot.create :admin
        params = { id: @admin.id, admin: { login: 'xpto' } }
        patch :update, params: params, format: :json
      end

      it "renders the json of updated admin" do
        admin_response = object_response(response.body)
        expect(admin_response[:login]).to eql 'xpto'
      end

      it { expect(response).to have_http_status(200) }
    end

    context "when admin is not updated" do
      before(:each) do
        @admin = FactoryBot.create :admin
        params = { id: @admin.id, admin: { login: '' } }
        patch :update, params: params, format: :json
      end

      it "renders the update errors" do
        admin_response = object_response(response.body)
        expect(admin_response).to have_key(:errors)
      end

      it { expect(response).to have_http_status(422) }
    end

  end

end
