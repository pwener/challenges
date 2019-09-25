# This concerns uses Authorization header to get current user
module Authenticable
  # used in controllers actions
  def current_user
    @current_user ||= Admin.find_by(auth_token: request.headers['Authorization'])
  end

  # used as controller filter
  def authorize!
    unless current_user.present?
      render json: { errors: 'Not authenticated...' }, status: :unauthorized
    end
  end

  # used in controllers actions
  def user_signed_in?
    current_user.present?
  end
end
