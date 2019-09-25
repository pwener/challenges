require 'rails_helper'

class Authentication
  include Authenticable
end

describe Authenticable, type: :controller do
  let(:authentication) { Authentication.new }
  subject { authentication }

  describe 'current user', type: :request do
    before do
      @admin = FactoryBot.create :admin
      request.headers['Authorization'] = @admin.auth_token
      authentication.stub(:request).and_return(request)
    end

    it 'return user owner of authoration token' do
      expect(authentication.current_user.auth_token).to eql @admin.auth_token
    end
  end
end