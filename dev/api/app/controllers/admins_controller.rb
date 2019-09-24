class AdminsController < ApplicationController
  before_action :find_by_id, except: [:create]

  # GET /admins/:id
  def show
    render json: @admin, status: :ok
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
    if @admin.update(admin_params)
      render json: @admin, status: :ok
    else
      render json: { errors: @admin.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /admins/:id
  def destroy
    @admin.destroy
    head :ok
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :login, :password, :password_confirmation)
  end

  def find_by_id
    @admin = Admin.find(params[:id])
  end
end
