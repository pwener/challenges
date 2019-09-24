require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  describe 'POST #create' do
    before(:each) do
      @admin = FactoryBot.create :admin
    end

    context 'when the credentials are correct' do
      before(:each) do
        credentials = { email: @admin.email, password: 'admin123' }
        post :create, params: { session: credentials }
      end

      it 'return the admin requested' do
        @admin.reload
        expect(object_response[:auth_token]).to eql @admin.auth_token
      end

      it { expect(response).to have_http_status(:ok)}
    end

    context 'when credentials are invalid' do
      before(:each) do
        credentials = { email: @admin.email, password: 'invalid_password' }
        post :create, params: { session: credentials }
      end

      it 'return a json with error' do
        expect(object_response[:errors]).to eql 'Invalid email or password'
      end

      it { expect(response).to have_http_status(:unauthorized) }
    end

  end
end
