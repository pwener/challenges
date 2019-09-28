class HeroController < ApplicationController
  before_action :authorize!

  # GET /heroes/:id
  def show
    hero = Hero.find(params[:id])
    render json: hero, except: :location_id, status: :ok
  end

  # POST /heroes
  def create
    hero = Hero.new(hero_params)

    if hero.save
      render json: hero,
             except: :location_id,
             include: :location,
             status: :created
    else
      render json: { errors: hero.errors }, status: :unprocessable_entity
    end
  end

  # POST /heroes/:id
  def update; end

  # DELETE /heroes/:id
  def destroy; end

  private

  def hero_params
    params.require(:hero).permit(
      :name, :rank, location_attributes: [ :latitude, :longitude ])
  end
end
