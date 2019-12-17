class RestsController < ApplicationController
  before_action :set_rest, only: [:show, :update, :destroy]

  # GET /rests
  def index
    @rests = Rest.all

    render json: @rests
  end

  # GET /rests/1
  def show
    render json: @rest
  end

  # POST /rests
  def create
    @rest = Rest.new(rest_params)

    if @rest.save
      render json: @rest, status: :created, location: @rest
    else
      render json: @rest.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rests/1
  def update
    if @rest.update(rest_params)
      render json: @rest
    else
      render json: @rest.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rests/1
  def destroy
    @rest.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rest
      @rest = Rest.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def rest_params
      params.require(:rest).permit(:name, :description, :page)
    end
end
