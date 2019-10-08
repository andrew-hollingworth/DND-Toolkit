class ScreenController < ApplicationController
  def index
    @screens = Screen.all

    render json: @screens
  end

end
