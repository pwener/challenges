require 'rails_helper'

RSpec.describe HeroController, type: :controller do

  describe 'POST #create' do
    context 'when is successfully created' do
      before(:each) do
        logged = FactoryBot.create :admin
        api_authorization_header logged.auth_token

        hero = FactoryBot.attributes_for(:hero)
                         .except(:location)
                         .merge(location_attributes: {
                                  longitude: 10, latitude: 10
                                })

        post :create, params: { hero: hero }, format: :json
      end

      it 'renders the json heroe' do
        expect(object_response[:name]).to eql 'Saitama'
      end

      it { expect(response).to have_http_status(201) }
    end
  end

end
