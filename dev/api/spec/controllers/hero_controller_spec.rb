require 'rails_helper'

RSpec.describe HeroController, type: :controller do
  before(:each) do
    logged = FactoryBot.create :admin
    api_authorization_header logged.auth_token
  end

  describe 'GET #show' do
    before(:each) do
      @hero = FactoryBot.create :hero
      get :show, params: { id: @hero.id }, format: :json
    end

    it 'returns the json of hero' do
      expect(object_response[:name]).to eql 'Saitama'
    end

    it { expect(response).to have_http_status(200) }
  end

  describe 'POST #create' do
    context 'when is successfully created' do
      before(:each) do
        hero = FactoryBot.attributes_for(:hero)
                         .except(:location)
                         .merge(location_attributes: {
                                  longitude: 10, latitude: 10
                                })

        post :create, params: { hero: hero }, format: :json
      end

      it 'renders the json hero' do
        expect(object_response[:name]).to eql 'Saitama'
      end

      it { expect(response).to have_http_status(201) }
    end
  end

end
