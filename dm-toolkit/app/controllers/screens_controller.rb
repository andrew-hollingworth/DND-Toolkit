class ScreensController < ApplicationController
  before_action :authorize_request
  # get /screens
  def index
    @screens = Screen.all

    render json: @screens
  end
  
    # GET /screens/1
    def show
      @screens = Screen.where(user_id: params[:id])
    
      render json: @screens
    end

    
    def one_screen
      @screen = Screen.where(id: params[:id])
    
      render json: @screen
    end

    # POST /screens/users/1
    def create
      @screen = Screen.new(user_id: params[:id], name: screen_params[:name])
      if @screen.save
        render json: @screen, status: :created
      else
        render json: @screen.errors, status: :unprocessable_entity
      end
    end

    # DELETE /screens/1
    def destroy
      @screen = Screen.find(params[:id])
      @screen.destroy();
      render json: @screen
    end  

    private 
    def screen_params
      params.permit(:id, :name)
    end

    def user_id
      params.permit(:user_id)
    end
end
