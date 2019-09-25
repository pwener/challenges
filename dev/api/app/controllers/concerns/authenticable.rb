# This concerns uses Authorization header to get current user
module Authenticable
  def current_user
    @current_user ||= Admin.find_by(auth_token: request.headers['Authorization'])
  end

  def authenticate_with_token!
    render json: { errors: 'Not authenticated...' },
           status: :unauthorized unless current_user.present?
  end
end
