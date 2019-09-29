require 'batle_pool'

class ThreatsController < ApplicationController

  # GET /threats
  def index
    threats = BatlePool.instance.all
    render json: threats,
           except: :location_id,
           include: [:heroes, :threat],
           status: :ok
  end

  # POST /threats
  def create
    threat = Threat.new(threat_params)

    if threat.save
      BatlePool.instance.release threat
      render json: threat,
             except: :location_id,
             include: :location,
             status: :created
    else
      render json: { errors: threat.errors }, status: :unprocessable_entity
    end
  end

  private

  def threat_params
    params.require(:threat).permit(
      :name, :rank, location_attributes: [ :latitude, :longitude ])
  end
end
