class AdminsController < ApplicationController
  before_action :authorize!

  # GET /admins/:id
  def show
    admin = Admin.find(params[:id])
    render json: admin, except: :auth_token, status: :ok
  end

  # POST /admins
  def create
    admin = Admin.new(admin_params)
    if admin.save
      render json: admin, status: :created
    else
      render json: { errors: admin.errors }, status: :unprocessable_entity
    end
  end

  # PUT /admins/:id
  def update
    if current_user.update(admin_params)
      render json: current_user, status: :ok
    else
      render json: { errors: current_user.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /admins/:id
  def destroy
    current_user.destroy
    head :ok
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :login, :password, :password_confirmation)
  end
end
