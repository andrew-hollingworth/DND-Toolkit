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
      @screen = Screen.find(params[:id])
      render json: @screen.with_associations
    end

    # Put /screens/1
    def update_screen
      @screen = Screen.find(params[:id])
      if params[:screen][:conditions]
        @conditions = Condition.find(params[:screen][:conditions])
        @screen.conditions = @conditions
      end
      if params[:screen][:rests]
        @rests = Rest.find(params[:screen][:rests])
        @screen.rests = @rests
      end
      if params[:screen][:spells]
        @spells = Spell.find(params[:spells][:screen])
        @screen.spells = @spells
      end
      render json: @screen.with_associations
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
      params.require(:screen).permit(:id, :name, :conditions, :rests, :spells)
    end

    def user_id
      params.permit(:user_id)
    end
end
