# This concerns uses Authorization header to get current user
module Authenticable
  def current_user
    @current_user ||= Admin.find_by(auth_token: request.headers['Authorization'])
  end

  # just to test purposes
  def request; end
end
