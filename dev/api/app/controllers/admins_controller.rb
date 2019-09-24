class AdminsController < ApplicationController
  # GET /admins/:id
  def show
    admin = Admin.find(params[:id])
    render json: admin, status: :ok
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

  # PUT /admins
  def update
    admin = Admin.find(params[:id])
    if admin.update(admin_params)
      render json: admin, status: :ok
    else
      render json: { errors: admin.errors }, status: :unprocessable_entity
    end
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :login, :password, :password_confirmation)
  end
end
