# This controller is responsible to manage authentication.
# Remember, this is a stateless service, so application will not store
# this token to use in another requests
class SessionsController < ApplicationController
  before_action :find_by_email, only: [:create]

  # POST /sessions
  def create
    password = params[:session][:password]
    if @admin.valid_password? password
      sign_in @admin, store: false
      @admin.generate_authentication_token!
      @admin.save
      render json: @admin, status: :ok
    else
      message = 'Invalid email or password'
      render json: { errors: message }, status: :unauthorized
    end
  end

  # DELETE /sessions
  def destroy
    admin = Admin.find_by(auth_token: params[:id])
    admin.generate_authentication_token!
    admin.save
    head :ok
  end

  private

  def find_by_email
    email = params[:session][:email]
    puts email
    @admin = Admin.find_by(email: email) if email.present?
  end
end