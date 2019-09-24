class AdminsController < ApplicationController
  respond_to :json

  def show
    admin = Admin.find(params[:id])
    render json: admin, status: :ok
  end
end
